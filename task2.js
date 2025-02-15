const encode = input => [...input]
    .map((x, i) => [x.charCodeAt(0), i])
    .sort()
    .flatMap(x => x)
    .join('.')
    .match(/./g)
    .flatMap((x, i) => new Array(x == '.' ? 1 : 2 + x * 2).fill((1 + i) % 2))
    .join('')
    .replace(/(([01])\2*)/g, x => `${(+x ? '.' : '-')}${x.length}`)

const decode = input => input
	.replace(/((\.|\-)\d+)/g, x => x.substring(1) === '1' ? '.' : (+x.substring(1)-2)/2)
	.match(/\d+\.\d+\.?/g)
	.map(a => a.split('.'))
	.sort((a,b) => a[1]-b[1])
	.map(a => String.fromCharCode(a[0]))
	.join('')