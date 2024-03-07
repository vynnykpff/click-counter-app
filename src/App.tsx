import './App.css'
import {Button} from "antd";
import {memo, useCallback, useState} from "react";

export const App = memo(() => {
	const [value, setValue] = useState(0);

	const handleIncreaseValue = useCallback(() => {
		setValue(prev => prev + 1);
	}, []);

	const handleResetValue = useCallback(() => {
		setValue(0);
	}, [])

	return (
		<div className='container'>
			<div className='wrapper'>
				<h1 className='title'>Click Counter</h1>
				<p className='sub-title'>Click: {value}</p>
				<div className='navigation-wrapper'>
					<Button type='primary' onClick={handleIncreaseValue}>Increase Count</Button>
					<Button type='primary' danger onClick={handleResetValue}>Reset Count</Button>
				</div>
			</div>
		</div>
	);
});

