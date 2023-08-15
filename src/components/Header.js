import React from 'react';

const Header = () => {
	return (
		<header className='d-flex justify-content-center align-items-center gap-4'>
			<img
				src='https://cdn.pixabay.com/photo/2016/10/09/19/19/coins-1726618_960_720.jpg'
				alt='logo'
				className='rounded-circle'
			/>
			<h1>Przelicznik Walut</h1>
		</header>
	);
};

export default Header;
