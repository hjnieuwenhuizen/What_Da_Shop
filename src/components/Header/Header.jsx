import React from 'react';
import { HeaderStyles } from './styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px'
	}
}));

const StyledIconButton = styled(IconButton)(() => ({
	border: 'none'
}));

/**
 * @method Header
 */
export default function Header() {
	return (
		<HeaderStyles>
			<header className="py-4 border-b border-gray-300">
				<div className="container mx-auto flex justify-between items-center">
					<h1 className="text-white text-2xl font-semibold">What Da Shop</h1>
					<div>
						<StyledIconButton aria-label="cart">
							<StyledBadge badgeContent={4} color="secondary">
								<ShoppingCartIcon />
							</StyledBadge>
						</StyledIconButton>
					</div>
				</div>
			</header>
		</HeaderStyles>
	);
}
