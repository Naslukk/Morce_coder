import React, { useState } from 'react'
import './Body.css'

function Body() {
    const [isDisplay,setIsDisplay] = useState(false)
    const [isDecode,setIsDecode] = useState(false)
    const [Input,setInput] = useState('')
    const [Output,setOutput] = useState('')
    const [copied,setCopied] = useState(false)

    const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        ' ': '/', // space
        'a': '*.-', 'b': '*-...', 'c': '*-.-.', 'd': '*-..', 'e': '*.', 'f': '*..-.', 'g': '*--.', 'h': '*....', 'i': '*..', 'j': '*.---',
        'k': '*-.-', 'l': '*.-..', 'm': '*--', 'n': '*-.', 'o': '*---', 'p': '*.--.', 'q': '*--.-', 'r': '*.-.', 's': '*...', 't': '*-',
        'u': '*..-', 'v': '*...-', 'w': '*.--', 'x': '*-..-', 'y': '*-.--', 'z': '*--..',
    };

    // Reverse the mapping to create a Morse code to character map
    const reverseMorseCodeMap = {};
    for (const char in morseCodeMap) {
        if (morseCodeMap.hasOwnProperty(char)) {
            reverseMorseCodeMap[morseCodeMap[char]] = char;
        }
    }

    // Function to convert text to Morse code
    const encodeTextToMorse = ()=>{
        const input = Input
        const morseCodeOutput = convertToMorseCode(input);
        setOutput(morseCodeOutput);
        setIsDisplay(true)
        copied && setCopied(false)
    }

    // Function to convert Morse code to text
    const decodeMorseToText = () => {
        const morseInput = Input
        const textOutput = convertToTextFromMorse(morseInput);
        setOutput(textOutput);
        setIsDisplay(true)
    }

    // Function to convert a single character to Morse code
    function charToMorse(char) {
        return morseCodeMap[char] || ''; // Return Morse code for the character, or an empty string if not found
    }

    // Function to convert a text to Morse code
    function convertToMorseCode(text) {
        return text.split('').map(charToMorse).join(' '); // Split text into characters, convert each character to Morse code, and join with spaces
    }

    // Function to convert Morse code to a single character
    function morseToChar(morse) {
        return reverseMorseCodeMap[morse] || '?'; // Return character for the Morse code, or a question mark if not found
    }

    // Function to convert Morse code to text
    function convertToTextFromMorse(morseCode) {
        return morseCode.split(' ').map(morseToChar).join(''); // Split Morse code into symbols, convert each symbol to a character, and join them together
    }
    return (
        <div className='wrapper'>
            <div className='second-wrapper'>
                <div className='btn-wrapper'>
                    <button className= {isDecode ?"btn": 'btn active'} onClick={()=>{
                        setIsDecode(false)
                        setInput('')
                        isDisplay && setIsDisplay(false)
                        Output && setOutput('')
                    }}>Encode</button>
                    <button className={isDecode ? 'btn active' : 'btn'} onClick={()=>{
                        setIsDecode(true)
                        setInput('')
                        isDisplay && setIsDisplay(false)
                        Output && setOutput('')
                    }}>Decode</button>
                </div>
                <div className='text-wrapper'>
                    <textarea
                        className='first-text'
                        cols="30" rows="10"
                        placeholder={isDecode ? 'Enter the morce code...' : 'Enter the text....'}
                        value={Input}
                        onChange={(e) =>{
                            setInput(e.target.value)
                        }}
                    >
                    </textarea>
                </div>
                <div className='gen-wrapper'>
                    <button className='btn'  onClick={isDecode && Input ? decodeMorseToText : encodeTextToMorse }>Generate</button>
                </div>
                {(isDisplay && Output) ? (
                    <div>
                        <div className='text-wrapper output'>
                            <textarea className='output-text' cols="30" rows="10" readOnly
                            value={Output}>
                            </textarea>
                        </div>
                        <div className='gen-wrapper'>
                            <button className='btn' onClick={()=>{
                                const tempTextarea = document.createElement('textarea');
                                tempTextarea.value = Output;
                                document.body.appendChild(tempTextarea)
                                tempTextarea.select();

                                document.execCommand('copy');
                                document.body.removeChild(tempTextarea);

                                setCopied(true);
                            }} >{copied ? "Copied" : "Copy"}
                                <i class="fa-regular fa-copy"></i>
                            </button>
                        </div>
                    </div>
                ) : ""}
            </div>
        </div>
    )
}

export default Body