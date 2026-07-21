import { useEffect, useState, useRef } from "react";
import touchMan from '../assets/img/touchMan.png';
import checkBox from '../assets/img/checkBox.svg';
import playFirst from "../assets/img/play.svg";
import playIcon from "../assets/img/play.svg";
import pauseIcon from "../assets/img/pause.svg";
import closeIcon from "../assets/img/iconClose.png";
import thumbnail from '../assets/img/thumbnail2.png';
import src from '../assets/video/video.mp4';
import "../assets/scss/AboutUs.scss"



function AboutUs() {
    const [isFixed, setIsFixed] = useState(false);
	const com: any = useRef(null),
		videoHub: any = useRef(null),
		video: any = useRef(null),
		videoPlayer: any = useRef(null),
		progressLine: any = useRef(null),
		progressFill: any = useRef(null),
		actionButton: any = useRef(null),
		actionImage: any = useRef(null),
		videoThumbnail: any = useRef(null),
		closeButton: any = useRef(null);

	function videoStart() {
		setIsFixed(prev => !prev)
		com.current.style.visibility = "hidden";
		videoThumbnail.current.style.visibility = "hidden"
		videoHub.current.style.display = "flex";
		videoPlayer.current.style.display = "flex";
		videoPlayer.current.play();
		videoPlayer.current.classList.toggle("video__player-open");
		updateButtonUI();
	}

	function videoClose() {
		setIsFixed(prev => !prev)
		com.current.style.visibility = "visible";
		videoThumbnail.current.style.visibility = "visible";
		videoHub.current.style.display = "none";
		videoPlayer.current.style.display = "none";
		videoPlayer.current.pause();
		videoPlayer.current.classList.toggle("video__player-open");
		updateButtonUI();
	}

	useEffect(() => {
		const handleTimeUpdate = () => {
			const { currentTime, duration } = videoPlayer.current;
			if (!duration) return;
			const progress = (currentTime / duration) * 100;
			progressFill.current.style.width = progress + "%";
		};
		const vid = videoPlayer.current;
		if (vid) {
			vid.addEventListener("timeupdate", handleTimeUpdate);
		}
		return () => {
			if (vid) {
				vid.removeEventListener("timeupdate", handleTimeUpdate);
			}
		};
	}, []);

	useEffect(() => {
		const bar = progressLine.current;
		let isDragging = false;

		const updateProgress = (e: any) => {
			const rect = bar.getBoundingClientRect();
			const clickX = e.clientX - rect.left;
			const width = rect.width;
			let percent = clickX / width;

			// защита от выхода за пределы
			percent = Math.max(0, Math.min(1, percent));

			progressFill.current.style.width = percent * 100 + "%";
			videoPlayer.current.currentTime = percent * videoPlayer.current.duration;
		};

		const handleMouseDown = (e: any) => {
			isDragging = true;
			updateProgress(e);
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		};

		const handleMouseMove = (e: any) => {
			if (isDragging) {
				updateProgress(e);
			}
		};

		const handleMouseUp = (e: any) => {
			if (isDragging) {
				updateProgress(e);
				isDragging = false;
				document.removeEventListener("mousemove", handleMouseMove);
				document.removeEventListener("mouseup", handleMouseUp);
			}
		};

		if (bar) {
			bar.addEventListener("mousedown", handleMouseDown);
		}

		return () => {
			if (bar) {
				bar.removeEventListener("mousedown", handleMouseDown);
			}
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, []);
	useEffect(() => {
		let observer = new IntersectionObserver(
			([entry]: any) => {
				if (!entry.isIntersecting && !videoPlayer.current.paused) {
					videoPlayer.current.pause();
					updateButtonUI();
				}
			},
			{ threshold: 0.4 }
		);
		if (video.current) observer.observe(video.current);
		return () => observer.disconnect();
	}, []);
	function updateButtonUI() {
		if (videoPlayer.current.paused) {
			actionImage.current.src = playIcon;
			actionButton.current.className =
				"video__hud__element video__hud__action video__hud__action_play";
		} else {
			actionImage.current.src = pauseIcon;
			actionButton.current.className =
				"video__hud__element video__hud__action video__hud__action_pause";
		}
	}
	function videoAct() {
		if (videoPlayer.current.paused) {
			videoHub.current.style.display = "flex";
			com.current.style.display = "none";
			videoPlayer.current.play();
		} else {
			videoPlayer.current.pause();
		}
		updateButtonUI();
	}
	useEffect(() => {
		const width = videoThumbnail.current.offsetWidth;
		com.current.style.bottom = `${width * 0.4}px`;
	}, []);

    return (
        <div className="AboutUs-container">
            <div className="AboutUs-wrapper">
                <img src={touchMan} alt="" />
                <div className={`${isFixed ? "container" : "AboutUsVideo-container"}`}>
                    <img ref={closeButton} className={`${isFixed ? "AboutUsVideo-open" : "AboutUsVideo-close"} close`} onClick={videoClose} src={closeIcon} alt="close"/>
                    <div ref={video} className={`${isFixed ? "video_fixed" : "AboutUsVideo"}`}>
                        <video
                            ref={videoPlayer}
                            className={"video__player"}
                            onClick={videoAct}
                            src={src}
                            poster={thumbnail}
                            preload="metadata"
                        ></video>
                        <img 
                            ref={videoThumbnail} 
                            className="thumbnail" 
                            src={thumbnail} 
                            alt=""
                        />
                        <div ref={com} className="com" onClick={videoStart}>
                            <img src={playFirst} alt="play" />
                        </div>
                        <div ref={videoHub} className="video__hud">
                            <div
                                ref={actionButton}
                                className="video__hud__element video__hud__action video__hud__action_play"
                                onClick={videoAct}
                            >
                                <img
                                    ref={actionImage}
                                    className="video__hud__action_img"
                                    src={playIcon}
                                    alt="action button"
                                />
                            </div>
                            <div className="video__hud__element video__hud__progress">
                                <div
                                    ref={progressLine}
                                    className="video__hud__element video__hud__progress_line"
                                >
                                    <div ref={progressFill} className="progress-fill"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="AboutUs-col">
                <p className="AboutUs-title">ABOUT US</p>
                <h1 className="AboutUs-title-sub">Bring your events to life like never before with our VR services.</h1>
                <p className="AboutUs-text">VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</p>
                <div className="AboutUs__checkBox">
                    <p className="AboutUs__checkBox-text"><img className="AboutUs__checkBox-img" src={checkBox} />Cutting-Edge Technology</p>
                    <p className="AboutUs__checkBox-text"><img className="AboutUs__checkBox-img" src={checkBox} />Versatile Applications</p>
                    <p className="AboutUs__checkBox-text"><img className="AboutUs__checkBox-img" src={checkBox} />Affordable and Accessible</p>
                </div>
                <button className="AboutUs-button">read more</button>
            </div>
        </div>
    )
}

export default AboutUs;