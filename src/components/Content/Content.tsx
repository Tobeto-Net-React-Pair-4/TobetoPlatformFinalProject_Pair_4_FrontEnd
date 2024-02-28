import React, { useState } from "react";

const Content: React.FC = () => {
	const [col, setCol] = useState<boolean>(false);


	const onCollapse = () => {
		setCol(!col);
	};

	return (
		<div id="directory-collapse-0">
			<div className="ant-collapse ant-collapse-icon-position-start">
				<div
					className={
						"ant-collapse-item " + (col ? "ant-collapse-item-active" : "")
					}
				>
					<div
						className="ant-collapse-header"
						onClick={onCollapse}
						aria-expanded={col ? "true" : "false"}
						aria-disabled="false"
						role="button"
						tabIndex={0}
					>
						<div className="ant-collapse-expand-icon">
							<span
								role="img"
								aria-label="right"
								className="anticon anticon-right ant-collapse-arrow"
								style={col ? { transform: "rotate(90deg)" } : {}}
							>
								<svg
									viewBox="64 64 896 896"
									focusable="false"
									data-icon="right"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
								</svg>
							</span>
						</div>
						<span className="ant-collapse-header-text">
							ASPNET Core MVC Basic
						</span>
						<div className="ant-collapse-extra">
							<div className="directory-line-unit-count text-green">
								<div className="unit-icon unit-completed" />
							</div>
						</div>
					</div>
					<div
						className={
							"ant-collapse-content " +
							(col
								? "ant-collapse-content-active"
								: "ant-collapse-content-inactive ant-collapse-content-hidden")
						}
						style={{ paddingLeft: "7px" }}
					>
						<div className="ant-collapse-content-box">
							{/* İçerik detayları */}
							<div className="unit-info" id="directory-18920">
								<div className="unit-info-left-block">
									<div className="unit-info-title">
										ASPNET Core ve ASPNET Tarihçesi
									</div>
									<div className="unit-info-type">
										<span className="unit-info-type-name">
											Video - <span style={{color: "#A0A0A0"}}>4 dk</span>
										</span>
									</div>
								</div>
								<div className="unit-info-right-block">
									<div className="unit-icon unit-completed" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
