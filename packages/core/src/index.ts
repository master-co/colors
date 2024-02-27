import fillColorScale from './fill-color-scale'

const colors = {
    fade: fillColorScale({
        10: '131518',
        20: '24262d',
        30: '363944',
        40: '4c515f',
        50: '63697c',
        60: '878d9f',
        70: 'a6abb8',
        80: 'c3c6cf',
        90: 'f4f4f6'
    }),
    gray: fillColorScale({
        10: '151515',
        20: '242424',
        30: '39393b',
        40: '515153',
        50: '6a6a6c',
        60: '8d8d8f',
        70: 'aaaaac',
        80: 'c6c6c8',
        90: 'f4f4f6'
    }),
    brown: fillColorScale({
        10: '1c130f',
        20: '31221b',
        30: '4b3429',
        40: '6a4a3a',
        50: '8a604c',
        60: 'af836e',
        70: 'c4a394',
        80: 'd8c2b8',
        90: 'f8f3f1'
    }),
    orange: fillColorScale({
        10: '221205',
        20: '3a1f08',
        30: '582f0d',
        40: '7c4312',
        50: 'a15717',
        60: 'd5731e',
        70: 'e79855',
        80: 'efbd92',
        90: 'fcf1e7'
    }),
    gold: fillColorScale({
        10: '1e1400',
        20: '342300',
        30: '4e3400',
        40: '6e4900',
        50: '906000',
        60: 'c08000',
        70: 'e89a00',
        80: 'ffba30',
        90: 'fff3da'
    }),
    yellow: fillColorScale({
        10: '1b1500',
        20: '2f2500',
        30: '473800',
        40: '634f00',
        50: '806700',
        60: 'ac8a00',
        70: 'd0a700',
        80: 'f0c100',
        90: 'fff5ca'
    }),
    grass: fillColorScale({
        10: '101803',
        20: '1c2a05',
        30: '2a4008',
        40: '3c5a0b',
        50: '4e750e',
        60: '689c13',
        70: '7dbc17',
        80: '92da1a',
        90: 'ebfad4'
    }),
    green: fillColorScale({
        10: '011a0b',
        20: '022d13',
        30: '03441d',
        40: '055f28',
        50: '067b34',
        60: '08a345',
        70: '0ac553',
        80: '0be561',
        90: 'd5fde5'
    }),
    beryl: fillColorScale({
        10: '001912',
        20: '002b1f',
        30: '00432f',
        40: '005d41',
        50: '007954',
        60: '00a170',
        70: '00c387',
        80: '00e19c',
        90: 'c9ffee'
    }),
    teal: fillColorScale({
        10: '001918',
        20: '002b28',
        30: '00413d',
        40: '005b55',
        50: '00776f',
        60: '009f94',
        70: '00bfb2',
        80: '00ddce',
        90: 'c5fffb'
    }),
    cyan: fillColorScale({
        10: '00181f',
        20: '002a35',
        30: '003f51',
        40: '005973',
        50: '007391',
        60: '0099c1',
        70: '00b9e9',
        80: '3dd7ff',
        90: 'dff8ff'
    }),
    sky: fillColorScale({
        10: '021726',
        20: '032841',
        30: '043c61',
        40: '065489',
        50: '086eb3',
        60: '0b92ee',
        70: '4db3f7',
        80: '8ccefa',
        90: 'eaf6fe'
    }),
    blue: fillColorScale({
        10: '051338',
        20: '09205e',
        30: '0d318d',
        40: '1344c4',
        50: '175fe9',
        60: '538cee',
        70: '81acf3',
        80: 'a5c7fd',
        90: 'edf4fe'
    }),
    indigo: fillColorScale({
        10: '161031',
        20: '24195e',
        30: '332592',
        40: '4835cc',
        50: '5a5bd5',
        60: '7d84e8',
        70: 'a1a5ee',
        80: 'bfc2f4',
        90: 'f1f2ff'
    }),
    violet: fillColorScale({
        10: '1f0839',
        20: '310e63',
        30: '491595',
        40: '641ed2',
        50: '7949e5',
        60: '9e77f5',
        70: 'b89bf9',
        80: 'd0bdfb',
        90: 'f5f1ff'
    }),
    purple: fillColorScale({
        10: '220736',
        20: '390c5b',
        30: '551287',
        40: '7719bd',
        50: '9832e4',
        60: 'b56cec',
        70: 'ca96f1',
        80: 'dcbaf6',
        90: 'f9f0ff'
    }),
    fuchsia: fillColorScale({
        10: '2b0720',
        20: '470b3d',
        30: '68105f',
        40: '8e1691',
        50: 'b61cbb',
        60: 'e04ee5',
        70: 'ea86ed',
        80: 'f1b1f3',
        90: 'feefff'
    }),
    pink: fillColorScale({
        10: '2d0519',
        20: '4c082b',
        30: '720c40',
        40: '9d1059',
        50: 'ca1473',
        60: 'ee52a3',
        70: 'f388c0',
        80: 'f7b2d6',
        90: 'fff0f8'
    }),
    crimson: fillColorScale({
        10: '33020f',
        20: '500317',
        30: '780522',
        40: 'a20d35',
        50: 'ce1a4b',
        60: 'ea5b82',
        70: 'f58ba7',
        80: 'ffb1c6',
        90: 'fff1f4'
    }),
    red: fillColorScale({
        10: '350001',
        20: '530001',
        30: '780506',
        40: 'a60708',
        50: 'd11a1e',
        60: 'eb5f63',
        70: 'fa8b8d',
        80: 'fdb3b5',
        90: 'fff1f1'
    }),
    black: '000000',
    white: 'ffffff'
}

export default colors
