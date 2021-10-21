import React, { Fragment } from 'react';
import '../css/style.css';
import '../css/plugin.css';
import { Link } from 'react-router-dom';

const ListMovie = () => {
	return (
		<Fragment>
			<div class='hero common-hero'>
				<div class='container'>
					<div class='row'>
						<div class='col-md-12'>
							<div class='hero-ct'>
								<h1> movie listing - list</h1>
								<ul class='breadcumb'>
									<li class='active'>
										<Link href='#'>Home</Link>
									</li>
									<li>
										{' '}
										<span class='ion-ios-arrow-right'></span> movie listing
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default ListMovie;
