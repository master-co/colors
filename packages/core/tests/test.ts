import fillColorScale from '../src/fill-color-scale'
import colors from '../src'

it('should generate 1~100', () => {
    let count = 0
    for (const colorName in colors) {
        const eachColorScale = colors[colorName as keyof typeof colors]
        const result = fillColorScale(eachColorScale)
        count += Object.keys(result).length
    }
    expect(count).toBe(2002)
})
