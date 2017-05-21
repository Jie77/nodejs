querystring.parse('foo=bar&baz=qux&baz=quux&corge');

/* =>
{ foo: 'bar', baz: ['qux', 'quux'], corge: '' }
*/


querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });

/* =>
'foo=bar&baz=qux&baz=quux&corge='
*/