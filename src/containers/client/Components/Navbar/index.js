import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../css/style.css';
import '../../css/plugin.css';

const Navbar = () => {
	return (
		<nav className='navbar navbar-default navbar-custom'>
			<div className='navbar-header logo'>
				<div
					className='navbar-toggle'
					data-toggle='collapse'
					data-target='#bs-example-navbar-collapse-1'>
					<span className='sr-only'>Toggle navigation</span>
					<div id='nav-icon1'>
						<span />
						<span />
						<span />
					</div>
				</div>
				<NavLink to='index.html'>
					<img
						className='logo'
						src='images/logo1.png'
						alt='images/logo1.png'
						width={119}
						height={58}
					/>
				</NavLink>
			</div>
			<div className='collapse navbar-collapse flex-parent' id='bs-example-navbar-collapse-1'>
				<ul className='nav navbar-nav flex-child-menu menu-left'>
					<li className='hidden'>
						<Link to='#page-top' />
					</li>
					<li className='dropdown first'>
						<Link className='btn btn-default dropdown-toggle lv1' data-toggle='dropdown'>
							Home <i className='fa fa-angle-down' aria-hidden='true' />
						</Link>
						<ul className='dropdown-menu level1'>
							<li>
								<Link to='index.html'>Home 01</Link>
							</li>
							<li>
								<Link to='homev2.html'>Home 02</Link>
							</li>
							<li>
								<Link to='homev3.html'>Home 03</Link>
							</li>
						</ul>
					</li>
					<li className='dropdown first'>
						<Link
							className='btn btn-default dropdown-toggle lv1'
							data-toggle='dropdown'
							data-hover='dropdown'>
							movies
							<i className='fa fa-angle-down' aria-hidden='true' />
						</Link>
						<ul className='dropdown-menu level1'>
							<li className='dropdown'>
								<Link to='#' className='dropdown-toggle' data-toggle='dropdown'>
									Movie grid
									<i className='ion-ios-arrow-forward' />
								</Link>
								<ul className='dropdown-menu level2'>
									<li>
										<Link to='moviegrid.html'>Movie grid</Link>
									</li>
									<li>
										<Link to='moviegridfw.html'>movie grid full width</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link to='movielist.html'>Movie list</Link>
							</li>
							<li>
								<Link to='moviesingle.html'>Movie single</Link>
							</li>
							<li className='it-last'>
								<NavLink to='seriessingle.html'>Series single</NavLink>
							</li>
						</ul>
					</li>
				</ul>
				<ul className='nav navbar-nav flex-child-menu menu-right'>
					<li>
						<Link to='#'>Help</Link>
					</li>
					<li className='loginLink'>
						<Link to='#'>LOG In</Link>
					</li>
					<li className='btn signupLink'>
						<Link to='#'>sign up</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
