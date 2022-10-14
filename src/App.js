import logo from "./logo.svg";
import "./App.css";

function App() {
	//onClick, onSelect, onKeyPress

	const enterLetter = (e) => {
		e.preventDefault();
	};

	function enterLetter(onClick) {
		document;
	}

	return (
		<div className='App'>
			<div className='title'>WORDLE</div>
			<div className='wordEntries'>
				<div className='finalWord' id='attemptOne'>
					<div className='letters row-one letter-one'></div>
					<div className='letters row-one letter-two'></div>
					<div className='letters row-one letter-three'></div>
					<div className='letters row-one letter-four'></div>
					<div className='letters row-one letter-five'></div>
				</div>
				<div className='finalWord' id='attemptTwo'>
					<div className='letters row-two letter-one'></div>
					<div className='letters row-two letter-two'></div>
					<div className='letters row-two letter-three'></div>
					<div className='letters row-two letter-four'></div>
					<div className='letters row-two letter-five'></div>
				</div>
				<div className='finalWord' id='attemptThree'>
					<div className='letters row-three letter-one'></div>
					<div className='letters row-three letter-two'></div>
					<div className='letters row-three letter-three'></div>
					<div className='letters row-three letter-four'></div>
					<div className='letters row-three letter-five'></div>
				</div>
				<div className='finalWord' id='attemptFour'>
					<div className='letters row-four letter-one'></div>
					<div className='letters row-four letter-two'></div>
					<div className='letters row-four letter-three'></div>
					<div className='letters row-four letter-four'></div>
					<div className='letters row-four letter-five'></div>
				</div>
				<div className='finalWord' id='attemptFive'>
					<div className='letters row-five letter-one'></div>
					<div className='letters row-five letter-two'></div>
					<div className='letters row-five letter-three'></div>
					<div className='letters row-five letter-four'></div>
					<div className='letters row-five letter-five'></div>
				</div>
				<div className='finalWord' id='attemptSix'>
					<div className='letters row-six letter-one'></div>
					<div className='letters row-six letter-two'></div>
					<div className='letters row-six letter-three'></div>
					<div className='letters row-six letter-four'></div>
					<div className='letters row-six letter-five'></div>
				</div>
			</div>
			<div className='keyboard'>
				<div className='keyRow' id='top'>
					<button className='keys' onClick={enterLetter}>
						Q
					</button>
					<button className='keys' onClick={enterLetter}>
						W
					</button>
					<button className='keys' onClick={enterLetter}>
						E
					</button>
					<button className='keys' onClick={enterLetter}>
						R
					</button>
					<button className='keys' onClick={enterLetter}>
						T
					</button>
					<button className='keys' onClick={enterLetter}>
						Y
					</button>
					<button className='keys' onClick={enterLetter}>
						U
					</button>
					<button className='keys' onClick={enterLetter}>
						I
					</button>
					<button className='keys' onClick={enterLetter}>
						O
					</button>
					<button className='keys' onClick={enterLetter}>
						P
					</button>
				</div>
				<div className='keyRow' id='middle'>
					<button className='keys' onClick={enterLetter}>
						A
					</button>
					<button className='keys' onClick={enterLetter}>
						S
					</button>
					<button className='keys' onClick={enterLetter}>
						D
					</button>
					<button className='keys' onClick={enterLetter}>
						F
					</button>
					<button className='keys' onClick={enterLetter}>
						G
					</button>
					<button className='keys' onClick={enterLetter}>
						H
					</button>
					<button className='keys' onClick={enterLetter}>
						J
					</button>
					<button className='keys' onClick={enterLetter}>
						K
					</button>
					<button className='keys' onClick={enterLetter}>
						L
					</button>
				</div>
				<div className='keyRow' id='bottom'>
					<button className='keys' id='enterKey' type='submit'>
						ENTER
					</button>
					<button className='keys' onClick={enterLetter}>
						Z
					</button>
					<button className='keys' onClick={enterLetter}>
						X
					</button>
					<button className='keys' onClick={enterLetter}>
						C
					</button>
					<button className='keys' onClick={enterLetter}>
						V
					</button>
					<button className='keys' onClick={enterLetter}>
						B
					</button>
					<button className='keys' onClick={enterLetter}>
						N
					</button>
					<button className='keys' onClick={enterLetter}>
						M
					</button>
					<button className='keys' id='backspaceKey' onClick={enterLetter}>
						🔙
					</button>
				</div>
			</div>

			{/* <header className='App-header'>
				Wordle
				<div className='container'>Hello, how are you?</div>
			</header> */}
		</div>
	);
}

export default App;
