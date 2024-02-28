import "./Activity.css";
import Content from "../../components/Content/Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent } from "react";
import { useState } from "react";
import ParentComponent from "./ParentComponent/ParentComponent";

const Activity: FunctionComponent = () => {
	const tabStyleContent = {
		left: "0px",
		width: "48px",
	};
	const tabStyleAbout = {
		left: "80px",
		width: "85px",
	};
	const [tab, setTab] = useState("content");
	function OnClickTab(tab: string) {
		setTab(tab);
	}

	return (
		<div id="wrapper-content" className="wrapper without-slide">
			<div id="dynamicContent" className="content">
				<div className="page-content activity-detail">
					<div className="activity-detail-header">
						<div className="row">
							<div className="col-lg-1 col-md-1 col-sm-2 col-xs-12 show-text-lg show-text-md show-text-sm hidden-text-xs">
								<img
									className="activity-image"
									src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
									alt=".NET & React Fullstack | Öğrenme Yolculuğu"
								/>
							</div>
							<div className="col-lg-11 col-md-11 col-sm-10 col-xs-12">
								<div className="row">
									<div className="col-xs-12">
										<div className="row">
											<div className="col-lg-7 col-md-7 col-sm-4 col-xs-12">
												<div className="activity-info">
													<h3>
														.NET &amp; React Fullstack | Öğrenme Yolculuğu
													</h3>
													<span hidden className="new-tag orange">
														YENİ
													</span>
													<span hidden className="new-tag blue">
														GELİŞİM YOLCULUĞU
													</span>
													<span hidden className="new-tag red">
														ZORUNLU
													</span>
													<div className="date-info-container">
														<span>
															<div className="date-info text-green">
															<FontAwesomeIcon icon={faThumbsUp} style={{color: "#3DCB79", margin:"2px 4px 0px 1px"}} />
																<span style={{color: "#3DCB79"}}>Devam Ediyor</span>
															</div>
															<span
																role="img"
																aria-label="question-circle"
																id="info-text-question"
																className="anticon anticon-question-circle"
															>
																<svg
																	viewBox="64 64 896 896"
																	focusable="false"
																	data-icon="question-circle"
																	width="1em"
																	height="1em"
																	fill="currentColor"
																	aria-hidden="true"
																>
																	<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
																	<path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
																</svg>
															</span>
														</span>
													</div>
												</div>
											</div>
											<div className="activity-process col-lg-5 col-md-5 col-sm-8 col-xs-12 text-lg-right text-md-right text-sm-right text-xs-center">
												<div
													className="ant-space ant-space-horizontal ant-space-align-center"
													style={{ gap: "8px" }}
												>
													<div className="ant-space-item" style={{}}>
														<div className="activity-score text-white background-green">
															<span className="account-balance text-light">100</span> PUAN
														</div>
													</div>
													<div className="ant-space-item" style={{}} />
													<div className="ant-space-item" style={{}}>
														<div className="like">
															<div className="like-area">
																<span className="like-button liked">
																	<div id="main-content">
																		<div id="sub-content">
																			<input
																				type="checkbox"
																				id="checkbox"
																				defaultChecked
																			/>
																			<label
																				id="checkbox-label"
																				htmlFor="checkbox"
																			>
																				<svg
																					id="heart-svg"
																					viewBox="467 392 58 57"
																				>
																					<g
																						id="Group"
																						fill="none"
																						fillRule="evenodd"
																						transform="translate(467 392)"
																					>
																						<path
																							d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
																							id="heart"
																							fill="#AAB8C2"
																						/>
																						<circle
																							id="main-circ"
																							fill="#E2264D"
																							opacity={0}
																							cx="29.5"
																							cy="29.5"
																							r="1.5"
																						/>
																						<g
																							id="grp7"
																							opacity={0}
																							transform="translate(7 6)"
																						>
																							<circle
																								id="oval1"
																								fill="#9CD8C3"
																								cx={2}
																								cy={6}
																								r={2}
																							/>
																							<circle
																								id="oval2"
																								fill="#8CE8C3"
																								cx={5}
																								cy={2}
																								r={2}
																							/>
																						</g>
																						<g
																							id="grp6"
																							opacity={0}
																							transform="translate(0 28)"
																						>
																							<circle
																								id="oval1"
																								fill="#CC8EF5"
																								cx={2}
																								cy={7}
																								r={2}
																							/>
																							<circle
																								id="oval2"
																								fill="#91D2FA"
																								cx={3}
																								cy={2}
																								r={2}
																							/>
																						</g>
																						<g
																							id="grp3"
																							opacity={0}
																							transform="translate(52 28)"
																						>
																							<circle
																								id="oval2"
																								fill="#9CD8C3"
																								cx={2}
																								cy={7}
																								r={2}
																							/>
																							<circle
																								id="oval1"
																								fill="#8CE8C3"
																								cx={4}
																								cy={2}
																								r={2}
																							/>
																						</g>
																						<g
																							id="grp2"
																							opacity={0}
																							transform="translate(44 6)"
																						>
																							<circle
																								id="oval2"
																								fill="#CC8EF5"
																								cx={5}
																								cy={6}
																								r={2}
																							/>
																							<circle
																								id="oval1"
																								fill="#CC8EF5"
																								cx={2}
																								cy={2}
																								r={2}
																							/>
																						</g>
																						<g
																							id="grp5"
																							opacity={0}
																							transform="translate(14 50)"
																						>
																							<circle
																								id="oval1"
																								fill="#91D2FA"
																								cx={6}
																								cy={5}
																								r={2}
																							/>
																							<circle
																								id="oval2"
																								fill="#91D2FA"
																								cx={2}
																								cy={2}
																								r={2}
																							/>
																						</g>
																						<g
																							id="grp4"
																							opacity={0}
																							transform="translate(35 50)"
																						>
																							<circle
																								id="oval1"
																								fill="#F48EA7"
																								cx={6}
																								cy={5}
																								r={2}
																							/>
																							<circle
																								id="oval2"
																								fill="#F48EA7"
																								cx={2}
																								cy={2}
																								r={2}
																							/>
																						</g>
																						<g
																							id="grp1"
																							opacity={0}
																							transform="translate(24)"
																						>
																							<circle
																								id="oval1"
																								fill="#9FC7FA"
																								cx="2.5"
																								cy={3}
																								r={2}
																							/>
																							<circle
																								id="oval2"
																								fill="#9FC7FA"
																								cx="7.5"
																								cy={2}
																								r={2}
																							/>
																						</g>
																					</g>
																				</svg>
																			</label>
																		</div>
																	</div>
																</span>
																<span className="like-text liked">
																	<span>0</span>
																</span>
															</div>
														</div>
													</div>
													<div className="ant-space-item" style={{}}>
														<div className="activity-favorite">
															<span className="remove-favorite" />
														</div>
													</div>
													<div className="ant-space-item" />
												</div>
											</div>
										</div>
									</div>
									<div className="col-xs-12">
										<div className="activity-progress-bar">
											<div
												className="ant-progress ant-progress-line ant-progress-status-active ant-progress-show-info ant-progress-default"
												role="progressbar"
											>
												<div
													className="ant-progress-outer"
													style={{ width: "100%", height: "3px" }}
												>
													<div className="ant-progress-inner">
														<div
															className="ant-progress-bg"
															style={{ width: "100%", height: "3px" }}
														/>
													</div>
												</div>
												<span className="ant-progress-text" title="100%">
													100%
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="activity-detail-tabs">
						<div
							className="ant-tabs ant-tabs-top"
							style={{ overflow: "unset" }}
						>
							<div role="tablist" className="ant-tabs-nav">
								<div className="ant-tabs-nav-wrap">
									<div
										className="ant-tabs-nav-list"
										style={{ transform: "translate(0px, 0px)" }}
									>
										<div
											data-node-key="content"
											className={
												"ant-tabs-tab " +
												(tab == "content" ? "ant-tabs-tab-active" : "")
											}
										>
											<div
												role="tab"
												aria-selected={tab == "content" ? "true" : "false"}
												className="ant-tabs-tab-btn"
												tabIndex={0}
												id="rc-tabs-0-tab-content"
												aria-controls="rc-tabs-0-panel-content"
											>
												<div className="tabs-nav ">
													<span
														className="tabs-nav-title text-black"
														onClick={() => {
															OnClickTab("content");
														}}
													>
														İçerik
													</span>
												</div>
											</div>
										</div>
										<div
											data-node-key="about"
											className={
												"ant-tabs-tab " +
												(tab == "about" ? "ant-tabs-tab-active" : "")
											}
										>
											<div
												role="tab"
												aria-selected={tab == "about" ? "true" : "false"}
												className="ant-tabs-tab-btn"
												tabIndex={tab == "content" ? 0 : -1}
												id="rc-tabs-0-tab-about"
												aria-controls="rc-tabs-0-panel-about"
											>
												<div className="tabs-nav ">
													<span
														className="tabs-nav-title text-black"
														onClick={() => {
															OnClickTab("about");
														}}
													>
														Hakkında
													</span>
												</div>
											</div>
										</div>
										<div
											className="ant-tabs-ink-bar"
											style={tab == "content" ? tabStyleContent : tabStyleAbout}
										/>
									</div>
								</div>
								<div className="ant-tabs-nav-operations ant-tabs-nav-operations-hidden">
									<button
										type="button"
										className="ant-tabs-nav-more"
										tabIndex={-1}
										aria-hidden="true"
										aria-haspopup="listbox"
										aria-controls="rc-tabs-0-more-popup"
										id="rc-tabs-0-more"
										aria-expanded="false"
										style={{ visibility: "hidden", order: 1 }}
									>
										<span
											role="img"
											aria-label="ellipsis"
											className="anticon anticon-ellipsis"
										>
											<svg
												viewBox="64 64 896 896"
												focusable="false"
												data-icon="ellipsis"
												width="1em"
												height="1em"
												fill="currentColor"
												aria-hidden="true"
											>
												<path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" />
											</svg>
										</span>
									</button>
								</div>
							</div>
							<div className="ant-tabs-content-holder">
								<div className="ant-tabs-content ant-tabs-content-top">
									<div
										role="tabpanel"
										tabIndex={tab == "content" ? 0 : -1}
										aria-hidden={tab == "content" ? "true" : "false"}
										className={
											"ant-tabs-tabpane ant-tabs-tabpane-" +
											(tab == "content" ? 0 : -1)
										}
										id="rc-tabs-0-panel-content"
										aria-labelledby="rc-tabs-0-tab-content"
									>
										{tab == "content" ? (
											<div className="activity-content">
												<div className="row">
													<div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
														<div className="activity-content-menu LXP-Collapse">
															<div
																className="ScrollbarsCustom"
																style={{
																	position: "relative",
																	width: "100%",
																	height: "260px",
																}}
															>
																<div
																	className="ScrollbarsCustom-Wrapper"
																	style={{
																		position: "absolute",
																		inset: "0px",
																		overflow: "hidden",
																	}}
																>
																	<div
																		className="ScrollbarsCustom-Scroller"
																		style={{
																			position: "absolute",
																			inset: "0px",
																			overflow: "hidden",
																		}}
																	>
																		<div
																			className="ScrollbarsCustom-Content"
																			style={{
																				boxSizing: "border-box",
																				display: "table-cell",
																				minWidth: "100%",
																			}}
																		>
																			<Content />
																		</div>
																	</div>
																</div>
																<div
																	className="ScrollbarsCustom-Track ScrollbarsCustom-TrackY"
																	style={{
																		position: "absolute",
																		overflow: "hidden",
																		borderRadius: "4px",
																		background: "rgba(0, 0, 0, 0.1)",
																		userSelect: "none",
																		width: "10px",
																		height: "calc(100% - 20px)",
																		top: "10px",
																		right: "0px",
																		display: "none",
																	}}
																>
																	<div
																		className="ScrollbarsCustom-Thumb ScrollbarsCustom-ThumbY"
																		style={{
																			touchAction: "none",
																			cursor: "pointer",
																			borderRadius: "4px",
																			background: "rgba(0, 0, 0, 0.4)",
																			width: "100%",
																			height: "0px",
																			display: "none",
																		}}
																	/>
																</div>
																<div
																	className="ScrollbarsCustom-Track ScrollbarsCustom-TrackX"
																	style={{
																		position: "absolute",
																		overflow: "hidden",
																		borderRadius: "4px",
																		background: "rgba(0, 0, 0, 0.1)",
																		userSelect: "none",
																		height: "10px",
																		width: "calc(100% - 20px)",
																		bottom: "0px",
																		left: "10px",
																		display: "none",
																	}}
																>
																	<div
																		className="ScrollbarsCustom-Thumb ScrollbarsCustom-ThumbX"
																		style={{
																			touchAction: "none",
																			cursor: "pointer",
																			borderRadius: "4px",
																			background: "rgba(0, 0, 0, 0.4)",
																			height: "100%",
																			width: "0px",
																			display: "none",
																		}}
																	/>
																</div>
															</div>
														</div>
													</div>
													<div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
														<div
															className="activity-content-info"
															id="activity-content-info"
														>
															<div
																id="activity-largeImageFileName"
																className="activity-largeImageFileName activity-video"
															>
																<div>
																	<video
																		data-vjs-player="true"
																		className="video-js vjs-default-skin vjs-paused vjs-controls-enabled vjs-workinghover vjs-v7 vjs-user-active my-player-dimensions"
																		playsInline
																		preload="auto"
																		id="my-player"
																		tabIndex={-1}
																		lang="tr"
																		translate="no"
																		role="region"
																		aria-label="Video Player"
																	>
																		<video
																			id="my-player_html5_api"
																			preload="auto"
																			playsInline
																			className="video-js vjs-default-skin horizontal"
																			tabIndex={-1}
																			disablePictureInPicture
																			src="blob:https://lms.tobeto.com/c5b4e13c-08f7-45df-ab67-0270e66d4c88"
																			poster="common_show_picture_cached.aspx?pQS=DiBldjEKnwIUHJyuhJZS1DI7Pfa5DFiX"
																		>
																			<source
																				src="https://enocta-mn360.mncdn.com/p/132/sp/13200/playManifest/entryId/0_v7vf39dt/format/applehttp/protocol/https/a.m3u8?st=pAEXXS4gp6titglHaNAXNA&e=1707504673"
																				type="application/x-mpegURL"
																			/>
																		</video>
																		<div
																			className="vjs-poster"
																			tabIndex={-1}
																			aria-disabled="false"
																			style={{
																				backgroundImage:
																					'url("common_show_picture_cached.aspx?pQS=DiBldjEKnwIUHJyuhJZS1DI7Pfa5DFiX")',
																			}}
																		/>
																		<div
																			className="vjs-text-track-display"
																			translate="yes"
																			aria-live="off"
																			aria-atomic="true"
																		>
																			<div
																				style={{
																					position: "absolute",
																					inset: "0px",
																					margin: "1.5%",
																				}}
																			/>
																		</div>
																		<div
																			className="vjs-loading-spinner"
																			dir="ltr"
																		>
																			<span className="vjs-control-text">
																				Video Player is loading.
																			</span>
																		</div>
																		<button
																			className="vjs-big-play-button"
																			type="button"
																			title="Play Video"
																			aria-disabled="false"
																		>
																			<span
																				className="vjs-icon-placeholder"
																				aria-hidden="true"
																			/>
																			<span
																				className="vjs-control-text"
																				aria-live="polite"
																			>
																				Play Video
																			</span>
																		</button>
																		<div className="vjs-control-bar" dir="ltr">
																			<button
																				className="vjs-play-control vjs-control vjs-button"
																				type="button"
																				title="Play"
																				aria-disabled="false"
																			>
																				<span
																					className="vjs-icon-placeholder"
																					aria-hidden="true"
																				/>
																				<span
																					className="vjs-control-text"
																					aria-live="polite"
																				>
																					Play
																				</span>
																			</button>
																			<div className="vjs-volume-panel vjs-control vjs-volume-panel-horizontal">
																				<button
																					className="vjs-mute-control vjs-control vjs-button vjs-vol-3"
																					type="button"
																					title="Mute"
																					aria-disabled="false"
																				>
																					<span
																						className="vjs-icon-placeholder"
																						aria-hidden="true"
																					/>
																					<span
																						className="vjs-control-text"
																						aria-live="polite"
																					>
																						Mute
																					</span>
																				</button>
																				<div className="vjs-volume-control vjs-control vjs-volume-horizontal">
																					<div
																						tabIndex={0}
																						className="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal"
																						role="slider"
																						aria-valuenow={100}
																						aria-valuemin={0}
																						aria-valuemax={100}
																						aria-label="Volume Level"
																						aria-live="polite"
																						aria-valuetext="100%"
																					>
																						<div className="vjs-mouse-display">
																							<div
																								className="vjs-volume-tooltip"
																								aria-hidden="true"
																							/>
																						</div>
																						<div className="vjs-volume-level">
																							<span className="vjs-control-text" />
																						</div>
																					</div>
																				</div>
																			</div>
																			<div className="vjs-current-time vjs-time-control vjs-control">
																				<span
																					className="vjs-control-text"
																					role="presentation"
																				>
																					Current Time&nbsp;
																				</span>
																				<span
																					className="vjs-current-time-display"
																					aria-live="off"
																					role="presentation"
																				>
																					0:00
																				</span>
																			</div>
																			<div
																				className="vjs-time-control vjs-time-divider"
																				aria-hidden="true"
																			>
																				<div>
																					<span>/</span>
																				</div>
																			</div>
																			<div className="vjs-duration vjs-time-control vjs-control">
																				<span
																					className="vjs-control-text"
																					role="presentation"
																				>
																					Duration&nbsp;
																				</span>
																				<span
																					className="vjs-duration-display"
																					aria-live="off"
																					role="presentation"
																				>
																					16:41
																				</span>
																			</div>
																			<div className="vjs-progress-control vjs-control">
																				<div
																					tabIndex={0}
																					className="vjs-progress-holder vjs-slider vjs-slider-horizontal"
																					role="slider"
																					aria-valuenow={0.0}
																					aria-valuemin={0}
																					aria-valuemax={100}
																					aria-label="Progress Bar"
																					aria-valuetext="00:00 of 16:41"
																				>
																					<div
																						className="vjs-load-progress"
																						style={{ width: "0.2%" }}
																					>
																						<span className="vjs-control-text">
																							<span>Loaded</span>:{" "}
																							<span className="vjs-control-text-loaded-percentage">
																								0.20%
																							</span>
																						</span>
																						<div
																							data-start={0}
																							data-end={2}
																							style={{
																								left: "0%",
																								width: "100%",
																							}}
																						/>
																					</div>
																					<div className="vjs-mouse-display">
																						<div
																							className="vjs-time-tooltip"
																							aria-hidden="true"
																						/>
																					</div>
																					<div
																						className="vjs-play-progress vjs-slider-bar"
																						aria-hidden="true"
																						style={{ width: "0%" }}
																					>
																						<div
																							className="vjs-time-tooltip"
																							aria-hidden="true"
																							style={{ right: "0px" }}
																						>
																							00:00
																						</div>
																					</div>
																				</div>
																			</div>
																			<div className="vjs-live-control vjs-control vjs-hidden">
																				<div
																					className="vjs-live-display"
																					aria-live="off"
																				>
																					<span className="vjs-control-text">
																						Stream Type&nbsp;
																					</span>
																					LIVE
																				</div>
																			</div>
																			<button
																				className="vjs-seek-to-live-control vjs-control"
																				type="button"
																				title="Seek to live, currently behind live"
																				aria-disabled="false"
																			>
																				<span
																					className="vjs-icon-placeholder"
																					aria-hidden="true"
																				/>
																				<span
																					className="vjs-control-text"
																					aria-live="polite"
																				>
																					Seek to live, currently behind live
																				</span>
																				<span
																					className="vjs-seek-to-live-text"
																					aria-hidden="true"
																				>
																					LIVE
																				</span>
																			</button>
																			<div className="vjs-remaining-time vjs-time-control vjs-control">
																				<span
																					className="vjs-control-text"
																					role="presentation"
																				>
																					Remaining Time&nbsp;
																				</span>
																				<span aria-hidden="true">-</span>
																				<span
																					className="vjs-remaining-time-display"
																					aria-live="off"
																					role="presentation"
																				>
																					16:41
																				</span>
																			</div>
																			<div className="vjs-custom-control-spacer vjs-spacer ">
																				&nbsp;
																			</div>
																			<div className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button">
																				<div
																					className="vjs-playback-rate-value"
																					id="vjs-playback-rate-value-label-my-player_component_254"
																				>
																					1x
																				</div>
																				<button
																					className="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-button"
																					type="button"
																					aria-disabled="false"
																					title="Playback Rate"
																					aria-haspopup="true"
																					aria-expanded="false"
																					aria-describedby="vjs-playback-rate-value-label-my-player_component_254"
																				>
																					<span
																						className="vjs-icon-placeholder"
																						aria-hidden="true"
																					/>
																					<span
																						className="vjs-control-text"
																						aria-live="polite"
																					>
																						Playback Rate
																					</span>
																				</button>
																				<div className="vjs-menu">
																					<ul
																						className="vjs-menu-content"
																						role="menu"
																					>
																						<li
																							className="vjs-menu-item"
																							tabIndex={-1}
																							role="menuitemradio"
																							aria-disabled="false"
																							aria-checked="false"
																						>
																							<span className="vjs-menu-item-text">
																								2x
																							</span>
																							<span
																								className="vjs-control-text"
																								aria-live="polite"
																							/>
																						</li>
																						<li
																							className="vjs-menu-item"
																							tabIndex={-1}
																							role="menuitemradio"
																							aria-disabled="false"
																							aria-checked="false"
																						>
																							<span className="vjs-menu-item-text">
																								1.75x
																							</span>
																							<span
																								className="vjs-control-text"
																								aria-live="polite"
																							/>
																						</li>
																						<li
																							className="vjs-menu-item"
																							tabIndex={-1}
																							role="menuitemradio"
																							aria-disabled="false"
																							aria-checked="false"
																						>
																							<span className="vjs-menu-item-text">
																								1.5x
																							</span>
																							<span
																								className="vjs-control-text"
																								aria-live="polite"
																							/>
																						</li>
																						<li
																							className="vjs-menu-item"
																							tabIndex={-1}
																							role="menuitemradio"
																							aria-disabled="false"
																							aria-checked="false"
																						>
																							<span className="vjs-menu-item-text">
																								1.25x
																							</span>
																							<span
																								className="vjs-control-text"
																								aria-live="polite"
																							/>
																						</li>
																						<li
																							className="vjs-menu-item vjs-selected"
																							tabIndex={-1}
																							role="menuitemradio"
																							aria-disabled="false"
																							aria-checked="true"
																						>
																							<span className="vjs-menu-item-text">
																								1x
																							</span>
																							<span
																								className="vjs-control-text"
																								aria-live="polite"
																							>
																								, selected
																							</span>
																						</li>
																						<li
																							className="vjs-menu-item"
																							tabIndex={-1}
																							role="menuitemradio"
																							aria-disabled="false"
																							aria-checked="false"
																						>
																							<span className="vjs-menu-item-text">
																								0.75x
																							</span>
																							<span
																								className="vjs-control-text"
																								aria-live="polite"
																							/>
																						</li>
																						<li
																							className="vjs-menu-item"
																							tabIndex={-1}
																							role="menuitemradio"
																							aria-disabled="false"
																							aria-checked="false"
																						>
																							<span className="vjs-menu-item-text">
																								0.5x
																							</span>
																							<span
																								className="vjs-control-text"
																								aria-live="polite"
																							/>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
																				<button
																					className="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-button"
																					type="button"
																					aria-disabled="false"
																					title="Chapters"
																					aria-haspopup="true"
																					aria-expanded="false"
																				>
																					<span
																						className="vjs-icon-placeholder"
																						aria-hidden="true"
																					/>
																					<span
																						className="vjs-control-text"
																						aria-live="polite"
																					>
																						Chapters
																					</span>
																				</button>
																				<div className="vjs-menu">
																					<ul
																						className="vjs-menu-content"
																						role="menu"
																					>
																						<li
																							className="vjs-menu-title"
																							tabIndex={-1}
																						>
																							Chapters
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
																				<button
																					className="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-button"
																					type="button"
																					aria-disabled="false"
																					title="Descriptions"
																					aria-haspopup="true"
																					aria-expanded="false"
																				>
																					<span
																						className="vjs-icon-placeholder"
																						aria-hidden="true"
																					/>
																					<span
																						className="vjs-control-text"
																						aria-live="polite"
																					>
																						Descriptions
																					</span>
																				</button>
																				<div className="vjs-menu">
																					<ul
																						className="vjs-menu-content"
																						role="menu"
																					>
																						<li
																							className="vjs-menu-item vjs-selected"
																							tabIndex={-1}
																							role="menuitemradio"
																							aria-disabled="false"
																							aria-checked="true"
																						>
																							<span className="vjs-menu-item-text">
																								descriptions off
																							</span>
																							<span
																								className="vjs-control-text"
																								aria-live="polite"
																							>
																								, selected
																							</span>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden">
																				<button
																					className="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-button"
																					type="button"
																					aria-disabled="false"
																					title="Audio Track"
																					aria-haspopup="true"
																					aria-expanded="false"
																				>
																					<span
																						className="vjs-icon-placeholder"
																						aria-hidden="true"
																					/>
																					<span
																						className="vjs-control-text"
																						aria-live="polite"
																					>
																						Audio Track
																					</span>
																				</button>
																				<div className="vjs-menu">
																					<ul
																						className="vjs-menu-content"
																						role="menu"
																					>
																						<li
																							className="vjs-menu-item vjs-selected vjs-main-menu-item"
																							tabIndex={-1}
																							role="menuitemradio"
																							aria-disabled="false"
																							aria-checked="true"
																						>
																							<span className="vjs-menu-item-text">
																								default
																							</span>
																							<span
																								className="vjs-control-text"
																								aria-live="polite"
																							>
																								, selected
																							</span>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<button
																				className="vjs-fullscreen-control vjs-control vjs-button"
																				type="button"
																				title="Fullscreen"
																				aria-disabled="false"
																			>
																				<span
																					className="vjs-icon-placeholder"
																					aria-hidden="true"
																				/>
																				<span
																					className="vjs-control-text"
																					aria-live="polite"
																				>
																					Fullscreen
																				</span>
																			</button>
																		</div>
																		<div
																			className="vjs-error-display vjs-modal-dialog vjs-hidden "
																			tabIndex={-1}
																			aria-describedby="my-player_component_499_description"
																			aria-hidden="true"
																			aria-label="Modal Window"
																			role="dialog"
																		>
																			<p
																				className="vjs-modal-dialog-description vjs-control-text"
																				id="my-player_component_499_description"
																			>
																				This is a modal window.
																			</p>
																			<div
																				className="vjs-modal-dialog-content"
																				role="document"
																			/>
																		</div>
																	</video>
																</div>
															</div>
															<div
																id="activity-unit-detail"
																className="activity-unit-detail"
															>
																<div className="row">
																	<div className="col-lg-9 col-md-8 col-sm-9 col-xs-12">
																		<div className="unit-detail-title">
																			<div>Eğitimlere Nasıl Katılırım?</div>
																		</div>
																		<div className="unit-detail-col unit-detail-col-default">
																			Video - <span style={{color:"#8F8F8F"}}>17 dk</span>
																		</div>
																		<div className="unit-detail-col unit-detail-col-score text-green">
																			100 Puan
																		</div>
																		<div className="unit-detail-col unit-detail-col-status last-child text-green">
																		<FontAwesomeIcon icon={faThumbsUp} style={{color: "#3DCB79", margin:"2px 4px 0px 1px"}} />
																			Tebrikler, tamamladın!
																		</div>
																	</div>
																	<div className="col-lg-3 col-md-4 col-sm-3 col-xs-12">
																		<div className="unit-box-actions text-lg-left text-md-left text-sm-left text-xs-center">
																			<div
																				className="ant-space ant-space-vertical"
																				style={{ gap: "8px" }}
																			>
																				<div
																					className="ant-space-item"
																					style={{}}
																				/>
																				<ParentComponent />
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										) : null}
									</div>
									<div
										id="rc-tabs-0-panel-about"
										role="tabpanel"
										tabIndex={tab == "about" ? 0 : -1}
										aria-labelledby="rc-tabs-0-tab-about"
										aria-hidden={tab == "about" ? "true" : "false"}
										className={
											"ant-tabs-tabpane ant-tabs-tabpane-" +
											(tab == "about" ? "active" : "hidden")
										}
									>
										{tab == "about" ? (
											<div className="activity-detail-info">
												<div className="info-section">
													<div className="row">
														<div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
															<i className="sg-icon sg-oven" />
															<strong>Başlangıç</strong>
														</div>
														<div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
															27 EKİ 2023 14:52
														</div>
													</div>
													<div className="row">
														<div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
															<i className="hidden-icon sg-icon sg-oven" />
															<strong>Bitiş</strong>
														</div>
														<div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
															<span className="text-black">29 ŞUB 2024 23:59</span>
														</div>
													</div>
												</div>
												<div className="info-section row">
													<div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
														<i className="sg-icon sg-stopwatch" />
														<strong>Geçirdiğin Süre</strong>
													</div>
													<div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
														<span className="text-black">28 sa 49 dk</span>
													</div>
												</div>
												<div className="info-section row">
													<div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
														<i className="sg-icon sg-stopwatch" />
														<strong>Tahmini Süre</strong>
													</div>
													<div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
														65 g 36 sa 30 dk
													</div>
												</div>
												<div className="info-section row">
													<div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
														<span
															role="img"
															aria-label="partition"
															className="anticon anticon-partition"
														>
															<svg
																viewBox="64 64 896 896"
																focusable="false"
																data-icon="partition"
																width="1em"
																height="1em"
																fill="currentColor"
																aria-hidden="true"
															>
																<defs>
																	<style
																		dangerouslySetInnerHTML={{ __html: "" }}
																	/>
																</defs>
																<path d="M640.6 429.8h257.1c7.9 0 14.3-6.4 14.3-14.3V158.3c0-7.9-6.4-14.3-14.3-14.3H640.6c-7.9 0-14.3 6.4-14.3 14.3v92.9H490.6c-3.9 0-7.1 3.2-7.1 7.1v221.5h-85.7v-96.5c0-7.9-6.4-14.3-14.3-14.3H126.3c-7.9 0-14.3 6.4-14.3 14.3v257.2c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3V544h85.7v221.5c0 3.9 3.2 7.1 7.1 7.1h135.7v92.9c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3v-257c0-7.9-6.4-14.3-14.3-14.3h-257c-7.9 0-14.3 6.4-14.3 14.3v100h-78.6v-393h78.6v100c0 7.9 6.4 14.3 14.3 14.3zm53.5-217.9h150V362h-150V211.9zM329.9 587h-150V437h150v150zm364.2 75.1h150v150.1h-150V662.1z" />
															</svg>
														</span>
														<strong>Eğitim Türü</strong>
													</div>
													<div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
														Eğitim
													</div>
												</div>
												<div className="info-section row">
													<div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
														<i className="sg-icon sg-tag" />
														<strong>Kategori</strong>
													</div>
													<div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
														<div>Genel</div>
													</div>
												</div>
												<div className="info-section row">
													<div className="col-lg-2 col-md-2 col-sm-3 col-xs-7">
														<i className="sg-icon sg-file" />
														<strong>İçerik</strong>
													</div>
													<div className="col-lg-10 col-md-10 col-sm-9 col-xs-5">
														290
													</div>
												</div>
												<div className="info-section file row">
													<div className="col-lg-2 col-md-2 col-sm-3 col-xs-7">
														<i className="hidden-icon sg-icon sg-file" />
														<span className="text-black">Görev</span>
													</div>
													<div className="col-lg-10 col-md-10 col-sm-9 col-xs-5">
														65
													</div>
												</div>
												<div className="info-section file row">
													<div className="col-lg-2 col-md-2 col-sm-3 col-xs-7">
														<i className="hidden-icon sg-icon sg-file" />
														<span className="text-black">Video</span>
													</div>
													<div className="col-lg-10 col-md-10 col-sm-9 col-xs-5">
														225
													</div>
												</div>
												<div id="last-section" className="info-section row">
													<div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
														<i className="sg-icon sg-briefcase" />
														<strong>Üretici Firma</strong>
													</div>
													<div className="col-lg-10 col-md-10 col-sm-9 col-xs-7">
														<a className="btn-change">Enocta</a>
													</div>
												</div>
											</div>
										) : null}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="growl-container show top-right" />
			<div className="push" />
		</div>
	);
};

export default Activity;
