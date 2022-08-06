



/***
 *    d888888b db   db d888888b .d8888.      db   d8b   db d88888b d8888b.      d8888b.  .d8b.  d8888b. d888888b 
 *    `~~88~~' 88   88   `88'   88'  YP      88   I8I   88 88'     88  `8D      88  `8D d8' `8b 88  `8D `~~88~~' 
 *       88    88ooo88    88    `8bo.        88   I8I   88 88ooooo 88oooY'      88oodD' 88ooo88 88oobY'    88    
 *       88    88~~~88    88      `Y8b.      Y8   I8I   88 88~~~~~ 88~~~b.      88~~~   88~~~88 88`8b      88    
 *       88    88   88   .88.   db   8D      `8b d8'8b d8' 88.     88   8D      88      88   88 88 `88.    88    
 *       YP    YP   YP Y888888P `8888Y'       `8b8' `8d8'  Y88888P Y8888P'      88      YP   YP 88   YD    YP    
 *                                                                                                               
 *                                                                                                               
 */

// STANDARD PROJECT IMPORTS


import * as strings from 'FpsCore115BannerWebPartStrings';
import FpsCore115Banner from './components/FpsCore115Banner';
export { IFpsCore115BannerProps } from './components/IFpsCore115BannerProps';

export { IFpsCore115BannerWebPartProps } from './IFpsCore115BannerWebPartProps';


/***
 *    d88888b d8888b. .d8888.      d8888b. d8888b. d88888b .d8888. d88888b d888888b .d8888. 
 *    88'     88  `8D 88'  YP      88  `8D 88  `8D 88'     88'  YP 88'     `~~88~~' 88'  YP 
 *    88ooo   88oodD' `8bo.        88oodD' 88oobY' 88ooooo `8bo.   88ooooo    88    `8bo.   
 *    88~~~   88~~~     `Y8b.      88~~~   88`8b   88~~~~~   `Y8b. 88~~~~~    88      `Y8b. 
 *    88      88      db   8D      88      88 `88. 88.     db   8D 88.        88    db   8D 
 *    YP      88      `8888Y'      88      88   YD Y88888P `8888Y' Y88888P    YP    `8888Y' 
 *
 *    USED IN PRESETTING PROPS
 */

export { applyPresetCollectionDefaults } from '@mikezimm/npmfunctions/dist/PropPaneHelp/ApplyPresets';
export { ISitePreConfigProps, } from '@mikezimm/npmfunctions/dist/PropPaneHelp/PreConfigFunctions';
export { PreConfiguredProps } from './CoreFPS/PreConfiguredSettings';


/***
 *     .d88b.  d8b   db      d888888b d8b   db d888888b d888888b 
 *    .8P  Y8. 888o  88        `88'   888o  88   `88'   `~~88~~' 
 *    88    88 88V8o 88         88    88V8o 88    88       88    
 *    88    88 88 V8o88         88    88 V8o88    88       88    
 *    `8b  d8' 88  V888        .88.   88  V888   .88.      88    
 *     `Y88P'  VP   V8P      Y888888P VP   V8P Y888888P    YP    
 *
 *     USED FIRST IN ONINIT
 */

export { webpartInstance, } from '@mikezimm/npmfunctions/dist/Services/DOM/FPSDocument';
// export { getUrlVars } from '@mikezimm/npmfunctions/dist/Services/Logging/LogFunctions';

export { IFPSUser } from '@mikezimm/npmfunctions/dist/Services/Users/IUserInterfaces';
export { getFPSUser } from '@mikezimm/npmfunctions/dist/Services/Users/FPSUser';

import * as links from '@mikezimm/npmfunctions/dist/Links/LinksRepos';

export { IRepoLinks } from '@mikezimm/npmfunctions/dist/Links/CreateLinks';

import { IRepoLinks } from '@mikezimm/npmfunctions/dist/Links/CreateLinks';
export const repoLink: IRepoLinks = links.gitRepoCoreFPS115Small;


/***
 *    .d8888. d888888b db    db db      d88888b .d8888. 
 *    88'  YP `~~88~~' `8b  d8' 88      88'     88'  YP 
 *    `8bo.      88     `8bd8'  88      88ooooo `8bo.   
 *      `Y8b.    88       88    88      88~~~~~   `Y8b. 
 *    db   8D    88       88    88booo. 88.     db   8D 
 *    `8888Y'    YP       YP    Y88888P Y88888P `8888Y' 
 *
 *    USED FOR STYLES
 */

export { expandoOnInit } from '@mikezimm/npmfunctions/dist/Services/DOM/Expando/WebPartOnInit';
export { renderCustomStyles } from '@mikezimm/npmfunctions/dist/WebPartFunctions/MainWebPartStyleFunctions';
export { updateBannerThemeStyles } from '@mikezimm/npmfunctions/dist/WebPartFunctions/BannerThemeFunctions';


/***
 *    db   d8b   db d8888b.      db   db d888888b .d8888. d888888b  .d88b.  d8888b. db    db 
 *    88   I8I   88 88  `8D      88   88   `88'   88'  YP `~~88~~' .8P  Y8. 88  `8D `8b  d8' 
 *    88   I8I   88 88oodD'      88ooo88    88    `8bo.      88    88    88 88oobY'  `8bd8'  
 *    Y8   I8I   88 88~~~        88~~~88    88      `Y8b.    88    88    88 88`8b      88    
 *    `8b d8'8b d8' 88           88   88   .88.   db   8D    88    `8b  d8' 88 `88.    88    
 *     `8b8' `8d8'  88           YP   YP Y888888P `8888Y'    YP     `Y88P'  88   YD    YP    
 *
 *     USED FOR WEB PART HISTORY
 */

export { updateWebpartHistoryV2,  } from '@mikezimm/npmfunctions/dist/Services/PropPane/WebPartHistory/Functions';
export { getWebPartHistoryOnInit } from '@mikezimm/npmfunctions/dist/Services/PropPane/WebPartHistory/OnInit';


/***
 *    d8888b.  .d8b.  d8b   db d8b   db d88888b d8888b. 
 *    88  `8D d8' `8b 888o  88 888o  88 88'     88  `8D 
 *    88oooY' 88ooo88 88V8o 88 88V8o 88 88ooooo 88oobY' 
 *    88~~~b. 88~~~88 88 V8o88 88 V8o88 88~~~~~ 88`8b   
 *    88   8D 88   88 88  V888 88  V888 88.     88 `88. 
 *    Y8888P' YP   YP VP   V8P VP   V8P Y88888P 88   YD 
 *
 *     USED FOR CREATING BANNER
 */

export { IWebpartBannerProps } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/onNpm/bannerProps';
export { mainWebPartRenderBannerSetup } from './CoreFPS/WebPartRenderBanner';
export { buildExportProps, buildFPSAnalyticsProps } from './CoreFPS/BuildExportProps';

/***
 *    d8888b. d8888b.  .d88b.  d8888b.       d888b  d8888b.  .d88b.  db    db d8888b. .d8888. 
 *    88  `8D 88  `8D .8P  Y8. 88  `8D      88' Y8b 88  `8D .8P  Y8. 88    88 88  `8D 88'  YP 
 *    88oodD' 88oobY' 88    88 88oodD'      88      88oobY' 88    88 88    88 88oodD' `8bo.   
 *    88~~~   88`8b   88    88 88~~~        88  ooo 88`8b   88    88 88    88 88~~~     `Y8b. 
 *    88      88 `88. `8b  d8' 88           88. ~8~ 88 `88. `8b  d8' 88b  d88 88      db   8D 
 *    88      88   YD  `Y88P'  88            Y888P  88   YD  `Y88P'  ~Y8888P' 88      `8888Y' 
 *
 *    USED FOR PROPERTY PANE GROUPS
 */

export { WebPartInfoGroup, } from '@mikezimm/npmfunctions/dist/Services/PropPane/zReusablePropPane';
export { FPSOptionsGroupBasic, } from '@mikezimm/npmfunctions/dist/Services/PropPane/FPSOptionsGroup3';
export { FPSBanner3BasicGroup,FPSBanner3NavGroup, FPSBanner3ThemeGroup } from '@mikezimm/npmfunctions/dist/Services/PropPane/FPSOptionsGroup3';
export { FPSBanner3VisHelpGroup } from '@mikezimm/npmfunctions/dist/CoreFPS/FPSOptionsGroupVisHelp';
export { FPSPinMePropsGroup } from '@mikezimm/npmfunctions/dist/Services/DOM/PinMe/FPSOptionsGroupPinMe';
export { FPSOptionsExpando, } from '@mikezimm/npmfunctions/dist/Services/DOM/Expando/FPSOptionsExpando'; //expandAudienceChoicesAll


/***
 *    d8888b. d8888b.  .d88b.  d8888b.      d888888b .88b  d88. d8888b.  .d88b.  d8888b. d888888b d888888b d8b   db  d888b  
 *    88  `8D 88  `8D .8P  Y8. 88  `8D        `88'   88'YbdP`88 88  `8D .8P  Y8. 88  `8D `~~88~~'   `88'   888o  88 88' Y8b 
 *    88oodD' 88oobY' 88    88 88oodD'         88    88  88  88 88oodD' 88    88 88oobY'    88       88    88V8o 88 88      
 *    88~~~   88`8b   88    88 88~~~           88    88  88  88 88~~~   88    88 88`8b      88       88    88 V8o88 88  ooo 
 *    88      88 `88. `8b  d8' 88             .88.   88  88  88 88      `8b  d8' 88 `88.    88      .88.   88  V888 88. ~8~ 
 *    88      88   YD  `Y88P'  88           Y888888P YP  YP  YP 88       `Y88P'  88   YD    YP    Y888888P VP   V8P  Y888P  
 *
 *    USED for IMPORTING and EXPORTING
 */

export { importBlockProps, } from './IFpsCore115BannerWebPartProps';
export { updateFpsImportProps, FPSImportPropsGroup } from '@mikezimm/npmfunctions/dist/Services/PropPane/ImportFunctions';
export { refreshBannerStylesOnPropChange,  } from '@mikezimm/npmfunctions/dist/WebPartFunctions/BannerThemeFunctions';
export { validateDocumentationUrl,  } from '@mikezimm/npmfunctions/dist/Links/ValidateLinks';


/***
 *     .d8b.  d8b   db  .d8b.  db      db    db d888888b d888888b  .o88b. .d8888. 
 *    d8' `8b 888o  88 d8' `8b 88      `8b  d8' `~~88~~'   `88'   d8P  Y8 88'  YP 
 *    88ooo88 88V8o 88 88ooo88 88       `8bd8'     88       88    8P      `8bo.   
 *    88~~~88 88 V8o88 88~~~88 88         88       88       88    8b        `Y8b. 
 *    88   88 88  V888 88   88 88booo.    88       88      .88.   Y8b  d8 db   8D 
 *    YP   YP VP   V8P YP   YP Y88888P    YP       YP    Y888888P  `Y88P' `8888Y' 
 *
 *    USED FOR ANALYTICS AND LOGGING
 */

// export { saveViewAnalytics } from './CoreFPS/Analytics';

