import colors from '../src'

it('should generate 2~98', () => {
    let count = 0
    for (const colorName in colors) {
        const eachColorScale = colors[colorName as keyof typeof colors]
        count += Object.keys(eachColorScale).length
    }
    expect(count).toBe(1014)
})

it('should start with #', () => {
    for (const colorName in colors) {
        const eachColorScale = colors[colorName as keyof typeof colors]
        if (typeof eachColorScale === 'string') {
            expect(eachColorScale).toMatch(/^#/)
            continue
        } else {
            for (const level in eachColorScale) {
                expect(eachColorScale[level]).toMatch(/^#/)
            }
        }
    }
})
