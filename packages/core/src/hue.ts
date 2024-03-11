import colors from './'

const hueColors: any = {}

for (const eachColorName in colors) {
    const eachColorScale = colors[eachColorName as keyof typeof colors]
    if (typeof eachColorScale === 'object') {
        const newColorScale: { [key: string]: any } = {}
        for (const eachColorScaleName in eachColorScale) {
            if (!isNaN(Number(eachColorScaleName))) {
                newColorScale[eachColorScaleName] = eachColorScale[eachColorScaleName as keyof typeof eachColorScale]
            }
        }
        if (Object.keys(newColorScale).length > 0) {
            hueColors[eachColorName] = newColorScale
        }
    }
}

export default hueColors