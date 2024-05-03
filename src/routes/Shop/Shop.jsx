import React from 'react';
import { ShopStyles } from './styles';
import Header from '../../components/Header';
import ShopMenu from '../../components/ShopMenu';

/**
 * @method Shop
 */
export default function Shop() {
	return (
		<ShopStyles>
			<Header />
			<ShopMenu />
		</ShopStyles>
	);
}
