<?php

declare(strict_types=1);

namespace Shel\Neos\CommandBar\Service\DataSource;

/*
 * This script belongs to the Neos CMS package "Shel.Neos.CommandBar".
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Neos\Controller\Backend\MenuHelper;
use Neos\Neos\Service\DataSource\AbstractDataSource;
use Shel\Neos\CommandBar\Domain\Dto\CommandDto;
use Shel\Neos\CommandBar\Helper\TranslationHelper;

class CommandsDataSource extends AbstractDataSource
{

    static protected $identifier = 'shel-neos-commandbar-commands';

    public function __construct(private readonly MenuHelper $menuHelper)
    {
    }

    public function getData(NodeInterface $node = null, array $arguments = []): array
    {
        $sitesForMenu = array_reduce($this->menuHelper->buildSiteList($this->controllerContext),
            static function (array $carry, array $site) {
                // Skip the currently active site
                if (!$site['active']) {
                    $carry[$site['nodeName']] = new CommandDto($site['name'], '', $site['uri'], 'globe');
                }
                return $carry;
            }, []);

        $modulesForMenu = array_reduce($this->menuHelper->buildModuleList($this->controllerContext),
            static function (array $carry, array $module) {
                // Skip hidden or modules without submodules
                if (!$module['submodules'] || $module['hideInMenu']) {
                    return $carry;
                }
                $carry[$module['group']] = [
                    'name' => TranslationHelper::translateByShortHandString($module['label']),
                    'description' => TranslationHelper::translateByShortHandString($module['description']),
                    'icon' => $module['icon'],
                    'subCommands' => array_reduce($module['submodules'],
                        static function (array $carry, array $submodule) {
                            if ($submodule['hideInMenu']) {
                                return $carry;
                            }
                            $carry[$submodule['module']] = new CommandDto(
                                TranslationHelper::translateByShortHandString($submodule['label']),
                                TranslationHelper::translateByShortHandString($submodule['description']),
                                $submodule['modulePath'],
                                $submodule['icon'],
                            );
                            return $carry;
                        }, []),
                ];
                return $carry;
            }, []);

        return [
            'sites' => [
                'name' => 'Sites',
                'description' => 'Switch to another site',
                'icon' => 'file',
                'subCommands' => $sitesForMenu,
            ],
            'modules' => [
                'name' => 'Modules',
                'description' => 'Open a backend module',
                'icon' => 'puzzle-piece',
                'subCommands' => $modulesForMenu,
            ],
        ];
    }
}