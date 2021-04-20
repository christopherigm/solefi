const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nom', 'Dec'
];

export default function( date ) {
  if ( !date ) {
    return null;
  }
  date = new Date( date );
  if ( isNaN(date) ) {
    return null;
  }
  date = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return date;
}
