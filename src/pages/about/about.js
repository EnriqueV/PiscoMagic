import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'segment-md segment-button': {
    'WebkitBoxFlex': '1',
    'WebkitFlex': '1',
    'MsFlex': '1',
    'flex': '1',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'rem', 'value': 4.2 }],
    'borderBottomWidth': [{ 'unit': 'px', 'value': 2 }],
    'borderBottomStyle': 'solid',
    'borderBottomColor': 'rgba(0, 0, 0, 0.1)',
    'fontSize': [{ 'unit': 'rem', 'value': 1.2 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'rem', 'value': 4 }],
    'textTransform': 'uppercase',
    'color': '#d01414',
    'backgroundColor': 'transparent',
    'opacity': '0.7',
    'WebkitTransition': '100ms all linear',
    'transition': '100ms all linear',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }]
  },
  'back': {
    'backgroundImage': 'url("../assets/images/pisco.jpg")',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'contain',
    'backgroundPosition': 'center'
  },
  'icon2': {
    'color': '#cc0000 !important'
  }
});
