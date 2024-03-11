import hueColors from '../src/hue'

test('hue colors only', () => {
    for (const key in hueColors) {
        if (Object.prototype.hasOwnProperty.call(hueColors, key)) {
            const value = hueColors[key as keyof typeof hueColors] as Record<string, unknown>
            if (typeof value === 'object' && value !== null) {
                for (const subKey in value) {
                    if (Object.prototype.hasOwnProperty.call(value, subKey)) {
                        expect(subKey).not.toContain('@light')
                        expect(subKey).not.toContain('@dark')
                    }
                }
            }
        }
    }
    expect(Object.keys(hueColors).length).toBe(20)
})