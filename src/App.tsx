import React from 'react'

import './App.css'

function App () {



	return (
		<div className="App">
			<div className="Wrapper">
				<div>
					<div>Астрономическое изображения дня</div>
					<div>
						<img src="https://cdni.rt.com/russian/images/2017.04/article/58fe599bc3618843468b47c1.jpg" alt=""/>
					</div>

				</div>
				<div>
					<div>
						Текущее время:
						<br/>
						12:32:43
						<br/>
						Дата:
						<br/>
						23.01.2019
					</div>
					<div>
						<input type="date"/>
					</div>
				</div>
			</div>

			<div>Pictures</div>
			<div>Показать еще</div>
		</div>
	)
}

export default App
