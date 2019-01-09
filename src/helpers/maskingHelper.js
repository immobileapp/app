const mask = (value, pattern) => {
	let unmasked = unmask(value),
    	valueIndex = 0,
        ended = false
        
	return pattern.split('').map(patternChar => {
    	if(valueIndex >= unmasked.length || ended) return
        let nextChar = unmasked.charAt(valueIndex)
        
    	if(areSameType(nextChar, patternChar)) {
        	valueIndex++
        	return nextChar
        }
        
        if(valueIndex < unmasked.length && unmask(patternChar) === '')
            return patternChar

        ended = true
    }).join('')
}

const unmask = value => (
    value.replace(/[^\w\s]/gi, '')
)

const areSameType = (valueChar, patternChar) => (
	(!isNaN(valueChar) && !isNaN(patternChar)) ||
    (valueChar.match(/[a-z]/i) && patternChar.match(/[a-z]/i))
)

export default { mask, unmask }