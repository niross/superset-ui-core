import CategoricalScheme from '../../CategoricalScheme';
var schemes = [{
  id: 'lyftColors',
  label: 'Lyft Colors',
  colors: ['#EA0B8C', '#6C838E', '#29ABE2', '#33D9C1', '#9DACB9', '#7560AA', '#2D5584', '#831C4A', '#333D47', '#AC2077']
}].map(function (s) {
  return new CategoricalScheme(s);
});
export default schemes;