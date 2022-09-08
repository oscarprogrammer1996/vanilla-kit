import { defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from '../../theme.css';

const BorderStyles = [
    'dashed',
    'dotted',
    'double',
    'groove',
    'hidden',
    'inset',
    'none',
    'outset',
    'ridge',
    'solid'
];

export const responsiveProperties = defineProperties({
    conditions: {
        mobile: {},
        tablet: { '@media': 'screen and (min-width: 768px)' },
        desktop: { '@media': 'screen and (min-width: 1024px)' }
    },
    defaultCondition: 'mobile',
    properties: {
        display: ['none', 'flex', 'grid'],
        flexDirection: ['row', 'column'],
        alignItems: ['start', 'center', 'end', 'stretch'],
        justifyContent: [
            'start',
            'center',
            'end',
            'stretch',
            'space-between',
            'space-evenly',
            'space-around'
        ],
        gap: vars.space,
        paddingTop: vars.space,
        paddingBottom: vars.space,
        paddingLeft: vars.space,
        paddingRight: vars.space,
        marginTop: vars.space,
        marginBottom: vars.space,
        marginLeft: vars.space,
        marginRight: vars.space,
        width: vars.width,
        height: vars.height,
        borderRadius: vars.space,
        borderWidth: ['1px'],
        borderStyle: BorderStyles,
        fontFamily: vars.fontFamily,
        fontSize: vars.space,
        lineHeight: vars.space,
        textAlign: ['start', 'center', 'end', 'justify'],
        border: {
            '1px solid red': '1px solid red',
            '1px solid blue': '1px solid blue',
            '1px solid yellow': '1px solid yellow',
            '1px solid green': '1px solid green'
        },
        gridTemplateColumns: ['1fr 1fr 1fr'],
        placeItems: ['start', 'center', 'end', 'justify']
    },
    shorthands: {
        flexPlaceItems: ['justifyContent', 'alignItems'],
        itemSize: ['height', 'width'],
        padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
        paddingX: ['paddingLeft', 'paddingRight'],
        paddingY: ['paddingTop', 'paddingBottom'],
        margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
        marginX: ['marginLeft', 'marginRight'],
        marginY: ['marginTop', 'marginBottom'],
        typeSize: ['fontSize', 'lineHeight']
    }
});