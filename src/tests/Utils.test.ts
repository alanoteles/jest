import { getStringInfo, toUpperCase } from "../app/Utils"


// describe('Utils test suite', () => {
    
//     it('should return uppercase', () => {
//         // arrange:
//         const sut = toUpperCase
//         const expected = 'ABC'

//         // act:
//         const actual = sut('abc')

//         // assert:
//         expect(actual).toBe(expected)
//     })

//     it.only('should return info for valid string', ()=>{
//         const actual = getStringInfo('My-String')

//         expect(actual.lowerCase).toBe('my-string')
//         expect(actual.extraInfo).toEqual({})

//         expect(actual.characters.length).toBe(9)
//         expect(actual.characters).toHaveLength(9)

//         expect(actual.characters).toEqual(['M', 'y','-','S','t','r','i','n','g'])
//         expect(actual.characters).toContain<string>('M')
//         expect(actual.characters).toEqual(
//             expect.arrayContaining(['S','t','r','i','n','g', 'M', 'y','-',])
//         )

//         expect(actual.extraInfo).not.toBe(undefined)
//         expect(actual.extraInfo).not.toBeUndefined()
//         expect(actual.extraInfo).toBeDefined()
//         expect(actual.extraInfo).toBeTruthy()
//     })
// })

describe('Multiple tests suite', ()=>{
    it('return right lower case', ()=> {
        const actual = getStringInfo('My-String')
        expect(actual.lowerCase).toBe('my-string')
    })
    it('return right upper case', ()=> {
        const actual = getStringInfo('My-String')
        expect(actual.upperCase).toBe('MY-STRING')
    })
    it('return right characters', ()=> {
        const actual = getStringInfo('My-String')
        expect(actual.characters).toEqual(['M', 'y','-','S','t','r','i','n','g'])
        expect(actual.characters).toContain<string>('M')
        expect(actual.characters).toEqual(
            expect.arrayContaining(['S','t','r','i','n','g', 'M', 'y','-',])
        )
    })
    it('return defined extra info', ()=> {
        const actual = getStringInfo('My-String')
        expect(actual.extraInfo).toBeDefined()
    })
    it('return right extra info', ()=> {
        const actual = getStringInfo('My-String')
        expect(actual.extraInfo).toEqual({})
    })

})


describe('toUpper case examples', ()=> {
    it.each([
        {input: 'abc', expected: 'ABC'},
        {input: 'My-String', expected: 'MY-STRING'},
        {input: 'def', expected: 'DEF'}
    ])('$input toUppercase should be $expected', ({input, expected})=>{
        const actual = toUpperCase(input)
        expect(actual).toBe(expected)
    })
})