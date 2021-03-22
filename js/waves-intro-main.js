// Copyright 2019-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import ScreenIcon from '../../joist/js/ScreenIcon.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import platform from '../../phet-core/js/platform.js';
import AlignGroup from '../../scenery/js/nodes/AlignGroup.js';
import Image from '../../scenery/js/nodes/Image.js';
import MediumScreen from '../../wave-interference/js/common/MediumScreen.js';
import lightScreenIcon from '../images/light_screen_icon_png.js';
import soundScreenIcon from '../images/sound_screen_icon_png.js';
import waterScreenIcon from '../images/water_screen_icon_png.js';
import wavesIntroStrings from './wavesIntroStrings.js';

const lightString = wavesIntroStrings.light;
const soundString = wavesIntroStrings.sound;
const waterString = wavesIntroStrings.water;
const wavesIntroTitleString = wavesIntroStrings[ 'waves-intro' ].title;

const simOptions = {
  credits: {
    leadDesign: 'Amy Rouinfar, Noah Podolefsky',
    softwareDevelopment: 'Sam Reid',
    team: 'Wendy Adams, Diana L\u00f3pez Tavares, Ariel Paul, Kathy Perkins, Katie Woessner',
    qualityAssurance: 'Steele Dalton, Megan Lai, Brooklyn Lash, Liam Mulhall, Devon Quispe, Laura Rea, Jacob Romero, Katie Woessner, Kelly Wurtz',
    graphicArts: 'Cheryl McCutchan',
    thanks: 'This material is based upon work supported by the National Science Foundation under STROBE Grant No. DMR ' +
            '1548924. Any opinions, findings, and conclusions or recommendations expressed in this material are those ' +
            'of the author(s) and do not necessarily reflect the views of the National Science Foundation.'
  },
  webgl: platform.mobileSafari
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {

  // Panels on the right side of the lattice (in the first three screens) have matching widths, within each screen and
  // across screens.
  const alignGroup = new AlignGroup( {

    // Elements should have the same widths but not constrained to have the same heights
    matchVertical: false
  } );

  const screens = [
    new MediumScreen( alignGroup, {
      scenes: [ 'waterScene' ],
      name: waterString,
      homeScreenIcon: new ScreenIcon( new Image( waterScreenIcon ), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      supportsSound: true
    } ),
    new MediumScreen( alignGroup, {
      scenes: [ 'soundScene' ],
      name: soundString,
      homeScreenIcon: new ScreenIcon( new Image( soundScreenIcon ), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      showPlaySoundButton: true,
      supportsSound: true
    } ),
    new MediumScreen( alignGroup, {
      scenes: [ 'lightScene' ],
      name: lightString,
      homeScreenIcon: new ScreenIcon( new Image( lightScreenIcon ), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      supportsSound: true
    } )
  ];

  const sim = new Sim( wavesIntroTitleString, screens, simOptions );
  sim.start();
} );