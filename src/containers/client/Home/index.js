import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './../css/style.css';
import './../css/plugin.css';

const Home = () => {
	return (
		<Fragment>
			<header className='ht-header'>
				<div className='container'>
					<nav className='navbar navbar-default navbar-custom'>
						{/* Brand and toggle get grouped for better mobile display */}
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
							<a href='index.html'>
								<img className='logo' src='images/logo1.png' alt width={119} height={58} />
							</a>
						</div>
						{/* Collect the nav links, forms, and other content for toggling */}
						<div className='collapse navbar-collapse flex-parent' id='bs-example-navbar-collapse-1'>
							<ul className='nav navbar-nav flex-child-menu menu-left'>
								<li className='hidden'>
									<a href='#page-top' />
								</li>
								<li className='dropdown first'>
									<a className='btn btn-default dropdown-toggle lv1' data-toggle='dropdown'>
										Home <i className='fa fa-angle-down' aria-hidden='true' />
									</a>
									<ul className='dropdown-menu level1'>
										<li>
											<a href='index.html'>Home 01</a>
										</li>
										<li>
											<a href='homev2.html'>Home 02</a>
										</li>
										<li>
											<a href='homev3.html'>Home 03</a>
										</li>
									</ul>
								</li>
								<li className='dropdown first'>
									<a
										className='btn btn-default dropdown-toggle lv1'
										data-toggle='dropdown'
										data-hover='dropdown'>
										movies
										<i className='fa fa-angle-down' aria-hidden='true' />
									</a>
									<ul className='dropdown-menu level1'>
										<li className='dropdown'>
											<a href='#' className='dropdown-toggle' data-toggle='dropdown'>
												Movie grid
												<i className='ion-ios-arrow-forward' />
											</a>
											<ul className='dropdown-menu level2'>
												<li>
													<a href='moviegrid.html'>Movie grid</a>
												</li>
												<li>
													<a href='moviegridfw.html'>movie grid full width</a>
												</li>
											</ul>
										</li>
										<li>
											<a href='movielist.html'>Movie list</a>
										</li>
										<li>
											<a href='moviesingle.html'>Movie single</a>
										</li>
										<li className='it-last'>
											<a href='seriessingle.html'>Series single</a>
										</li>
									</ul>
								</li>
								<li className='dropdown first'>
									<a
										className='btn btn-default dropdown-toggle lv1'
										data-toggle='dropdown'
										data-hover='dropdown'>
										celebrities <i className='fa fa-angle-down' aria-hidden='true' />
									</a>
									<ul className='dropdown-menu level1'>
										<li>
											<a href='celebritygrid01.html'>celebrity grid 01</a>
										</li>
										<li>
											<a href='celebritygrid02.html'>celebrity grid 02 </a>
										</li>
										<li>
											<a href='celebritylist.html'>celebrity list</a>
										</li>
										<li className='it-last'>
											<a href='celebritysingle.html'>celebrity single</a>
										</li>
									</ul>
								</li>
								<li className='dropdown first'>
									<a
										className='btn btn-default dropdown-toggle lv1'
										data-toggle='dropdown'
										data-hover='dropdown'>
										news <i className='fa fa-angle-down' aria-hidden='true' />
									</a>
									<ul className='dropdown-menu level1'>
										<li>
											<a href='bloglist.html'>blog List</a>
										</li>
										<li>
											<a href='bloggrid.html'>blog Grid</a>
										</li>
										<li className='it-last'>
											<a href='blogdetail.html'>blog Detail</a>
										</li>
									</ul>
								</li>
								<li className='dropdown first'>
									<a
										className='btn btn-default dropdown-toggle lv1'
										data-toggle='dropdown'
										data-hover='dropdown'>
										community <i className='fa fa-angle-down' aria-hidden='true' />
									</a>
									<ul className='dropdown-menu level1'>
										<li>
											<a href='userfavoritegrid.html'>user favorite grid</a>
										</li>
										<li>
											<a href='userfavoritelist.html'>user favorite list</a>
										</li>
										<li>
											<a href='userprofile.html'>user profile</a>
										</li>
										<li className='it-last'>
											<a href='userrate.html'>user rate</a>
										</li>
									</ul>
								</li>
							</ul>
							<ul className='nav navbar-nav flex-child-menu menu-right'>
								<li className='dropdown first'>
									<a
										className='btn btn-default dropdown-toggle lv1'
										data-toggle='dropdown'
										data-hover='dropdown'>
										pages <i className='fa fa-angle-down' aria-hidden='true' />
									</a>
									<ul className='dropdown-menu level1'>
										<li>
											<a href='landing.html'>Landing</a>
										</li>
										<li>
											<a href='404.html'>404 Page</a>
										</li>
										<li className='it-last'>
											<a href='comingsoon.html'>Coming soon</a>
										</li>
									</ul>
								</li>
								<li>
									<a href='#'>Help</a>
								</li>
								<li className='loginLink'>
									<a href='#'>LOG In</a>
								</li>
								<li className='btn signupLink'>
									<a href='#'>sign up</a>
								</li>
							</ul>
						</div>
						{/* /.navbar-collapse */}
					</nav>
					{/* top search form */}
					<div className='top-search'>
						<select>
							<option value='united'>TV show</option>
							<option value='saab'>Others</option>
						</select>
						<input
							type='text'
							placeholder='Search for a movie, TV Show or celebrity that you are looking for'
						/>
					</div>
				</div>
			</header>
			<div className='movie-items'>
				<div className='container'>
					<div className='row ipad-width'>
						<div className='col-md-8'>
							<div className='title-hd'>
								<h2>in theater</h2>
								<a href='#' className='viewall'>
									View all <i className='ion-ios-arrow-right' />
								</a>
							</div>
							<div className='tabs'>
								<ul className='tab-links'>
									<li className='active'>
										<a href='#tab1'>#Popular</a>
									</li>
									<li>
										<a href='#tab2'> #Coming soon</a>
									</li>
									<li>
										<a href='#tab3'> #Top rated</a>
									</li>
									<li>
										<a href='#tab4'> #Most reviewed</a>
									</li>
								</ul>
								<div className='tab-content'>
									<div id='tab1' className='tab active'>
										<div className='row'>
											<div className='slick-multiItem'>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item1.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Interstellar</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item2.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The revenant</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item3.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item4.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The walk</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item5.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Interstellar</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item6.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The revenant</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item7.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item8.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The walk</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item3.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id='tab2' className='tab'>
										<div className='row'>
											<div className='slick-multiItem'>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item5.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Interstellar</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item6.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The revenant</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item7.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item8.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The walk</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item3.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id='tab3' className='tab'>
										<div className='row'>
											<div className='slick-multiItem'>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item1.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Interstellar</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item2.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The revenant</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item3.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item4.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The walk</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item3.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id='tab4' className='tab'>
										<div className='row'>
											<div className='slick-multiItem'>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item5.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Interstellar</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item6.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The revenant</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item7.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item8.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The walk</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item3.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='title-hd'>
								<h2>on tv</h2>
								<a href='#' className='viewall'>
									View all <i className='ion-ios-arrow-right' />
								</a>
							</div>
							<div className='tabs'>
								<ul className='tab-links-2'>
									<li>
										<a href='#tab21'>#Popular</a>
									</li>
									<li className='active'>
										<a href='#tab22'> #Coming soon</a>
									</li>
									<li>
										<a href='#tab23'> #Top rated</a>
									</li>
									<li>
										<a href='#tab24'> #Most reviewed</a>
									</li>
								</ul>
								<div className='tab-content'>
									<div id='tab21' className='tab'>
										<div className='row'>
											<div className='slick-multiItem'>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item1.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Interstellar</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item2.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The revenant</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item3.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item4.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The walk</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item3.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id='tab22' className='tab active'>
										<div className='row'>
											<div className='slick-multiItem'>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item5.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Interstellar</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item6.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The revenant</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item7.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item8.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The walk</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item1.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Interstellar</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item2.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The revenant</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item3.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item4.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The walk</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item5.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Interstellar</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item6.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The revenant</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id='tab23' className='tab'>
										<div className='row'>
											<div className='slick-multiItem'>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item1.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Interstellar</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item2.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The revenant</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item3.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item4.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The walk</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item5.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Interstellar</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item6.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The revenant</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item7.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item8.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The walk</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item3.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id='tab24' className='tab'>
										<div className='row'>
											<div className='slick-multiItem'>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item5.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Interstellar</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item6.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The revenant</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item7.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item8.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>The walk</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
												<div className='slide-it'>
													<div className='movie-item'>
														<div className='mv-img'>
															<img src='images/uploads/mv-item3.jpg' alt width={185} height={284} />
														</div>
														<div className='hvr-inner'>
															<a href='moviesingle.html'>
																{' '}
																Read more <i className='ion-android-arrow-dropright' />{' '}
															</a>
														</div>
														<div className='title-in'>
															<h6>
																<a href='#'>Die hard</a>
															</h6>
															<p>
																<i className='ion-android-star' />
																<span>7.4</span> /10
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='sidebar'>
								<div className='ads'>
									<img src='images/uploads/ads1.png' alt width={336} height={296} />
								</div>
								<div className='celebrities'>
									<h4 className='sb-title'>Spotlight Celebrities</h4>
									<div className='celeb-item'>
										<a href='#'>
											<img src='images/uploads/ava1.jpg' alt width={70} height={70} />
										</a>
										<div className='celeb-author'>
											<h6>
												<a href='#'>Samuel N. Jack</a>
											</h6>
											<span>Actor</span>
										</div>
									</div>
									<div className='celeb-item'>
										<a href='#'>
											<img src='images/uploads/ava2.jpg' alt width={70} height={70} />
										</a>
										<div className='celeb-author'>
											<h6>
												<a href='#'>Benjamin Carroll</a>
											</h6>
											<span>Actor</span>
										</div>
									</div>
									<div className='celeb-item'>
										<a href='#'>
											<img src='images/uploads/ava3.jpg' alt width={70} height={70} />
										</a>
										<div className='celeb-author'>
											<h6>
												<a href='#'>Beverly Griffin</a>
											</h6>
											<span>Actor</span>
										</div>
									</div>
									<div className='celeb-item'>
										<a href='#'>
											<img src='images/uploads/ava4.jpg' alt width={70} height={70} />
										</a>
										<div className='celeb-author'>
											<h6>
												<a href='#'>Justin Weaver</a>
											</h6>
											<span>Actor</span>
										</div>
									</div>
									<a href='#' className='btn'>
										See all celebrities
										<i className='ion-ios-arrow-right' />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Home;
