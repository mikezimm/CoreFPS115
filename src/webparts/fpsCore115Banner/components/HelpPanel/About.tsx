import * as React from 'react';

//import { IHelpTableRow, IHelpTable, IPageContent, ISinglePageProps } from '../Component/ISinglePageProps';
import { IHelpTable, } from '@mikezimm/npmfunctions/dist/HelpPanelOnNPM/banner/SinglePage/ISinglePageProps';

import { IRepoLinks } from '@mikezimm/npmfunctions/dist/Links/CreateLinks';

import { createAboutRow } from '@mikezimm/npmfunctions/dist/CoreFPS/BannerPageMisc';

export const panelVersionNumber = '2022-07-22 -  1.0.0.01'; //Added to show in panel

export function aboutTable( repoLinks: IRepoLinks, showRepoLinks: boolean ) {

    const table : IHelpTable  = {
        heading: 'Version History',
        headers: ['Date','Version','Focus'],
        rows: [],
    };

    /**
     * Security update log 
     * 
     * converting all links and cdns to lower case so casing does miss a flag
     * standardizing all cdn links to start with /sites/ if on tenant
     * standardinzing all tag lings to start with /sites/ if on tenant
     * removing any extra // from both cdns and file links so you cant add extra slash in a url and slip by
     * 
     * Does NOT find files without extensions (like images and also script files.)
     * 
     * WARNING:  DO NOT add any CDNs to Global Warn or Approve unless you want it to apply to JS as well.
     */

    table.rows.push( createAboutRow('2022-07-22',"1.0.0.01","Initial Build", showRepoLinks === true ? repoLinks : null ) );
    
    return { table: table };

}

