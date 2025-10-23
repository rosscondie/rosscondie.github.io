import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	const [userInput, setUserInput] = useState("");
	const [commandHistory, setCommandHistory] = useState([]);
	const [showInput, setShowInput] = useState(false);
	const inputRef = useRef(null);

	const prompt = {
		user: "ross",
		host: "dev",
		path: "~"
	};

	const Prompt = () => (
		<>
			<span className="prompt-user">{prompt.user}</span>
			<span className="prompt-separator">@</span>
			<span className="prompt-host">{prompt.host}</span>
			<span className="prompt-colon">:</span>
			<span className="prompt-path">{prompt.path}</span>
			<span className="prompt-symbol">$&nbsp;</span>
		</>
	);

	// Show interactive input after animations complete
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowInput(true);
			if (inputRef.current) {
				inputRef.current.focus();
			}
		}, 3200);
		return () => clearTimeout(timer);
	}, []);

	// Focus input when clicking terminal
	const handleTerminalClick = () => {
		if (inputRef.current && showInput) {
			inputRef.current.focus();
		}
	};

	const executeCommand = (cmd) => {
		const command = cmd.trim().toLowerCase();
		let output = "";

		switch (command) {
			case "help":
				output = "Available commands: whoami, cat, ls, neofetch, clear, exit";
				break;
			case "whoami":
				output = "Ross — Software Developer @ VIER GmbH";
				break;
			case "cat current_focus.txt":
			case "cat current_focus":
				output = "AI tooling, CI/CD automation";
				break;
			case "cat bio.txt":
			case "cat bio":
				output = (
					<div>
						Building tools that solve real problems.<br />
						Optimizing for clarity over cleverness.<br />
						<br />
						When I'm not shipping code, you'll find me:<br />
						- Dialing in espresso shots<br />
						- Shooting 35mm film<br />
						- Configuring Neovim (again)<br />
					</div>
				);
				break;
			case "cat .secrets":
			case "cat secrets":
				output = "My latte art is actually really good. Also, yes, I do jiu jitsu. Yes, I know that's the most developer thing ever.";
				break;
			case "cat contact.txt":
			case "cat contact":
				output = "Reach out via the links below or find me on GitHub.";
				break;
			case "ls":
			case "ls hobbies":
			case "ls hobbies/":
				output = (
					<span>
						<span className="file-dir">latte-art/</span>&nbsp;&nbsp;
						<span className="file-dir">photography/</span>&nbsp;&nbsp;
						<span className="file-dir">nvim/</span>&nbsp;&nbsp;
						<span className="file-hidden">.secrets</span>
					</span>
				);
				break;
			case "ls -la":
			case "ls -la hobbies/":
			case "ls -a":
				output = (
					<div>
						<span className="file-dir">latte-art/</span>&nbsp;&nbsp;
						<span className="file-dir">photography/</span>&nbsp;&nbsp;
						<span className="file-dir">vim-config/</span>&nbsp;&nbsp;
						<span className="file-dir">bjj/</span><br />
						<span className="file-hidden">.secrets</span>&nbsp;&nbsp;
						<span className="file-hidden">.coffee_addiction</span>
					</div>
				);
				break;
			case "neofetch":
				output = (
					<pre className="neofetch-output">
						{`        ross@dev
        --------
        OS: Portfolio v1.0
        Shell: zsh
        Languages: Go, TypeScript, Python
        Focus: AI tools & CI/CD
        Coffee: Always
        Status: Shipping`}
					</pre>
				);
				break;
			case "clear":
				setCommandHistory([]);
				setUserInput("");
				return;
			case "exit":
				output = "Nice try. There is no escape.";
				break;
			case "vim":
				output = "Entering vim... (Press ESC then :q! ... just kidding, you're stuck)";
				break;
			case "sudo rm -rf /":
			case "rm -rf /":
				output = "I'm not falling for that one.";
				break;
			case "":
				return;
			default:
				output = `Command not found: ${command}. Type 'help' for available commands.`;
		}

		setCommandHistory([...commandHistory, { command: cmd, output }]);
		setUserInput("");
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			executeCommand(userInput);
		}
	};

	return (
		<header>
			<div className="container header__container">
				<div className="dev-symbol">&lt;/&gt;</div>
				<div className="terminal-window" onClick={handleTerminalClick}>
					<div className="terminal-line">
						<Prompt />
						<span className="command typing-animation">whoami</span>
					</div>
					<div className="terminal-output delayed-output-1">
						Ross — Software Developer @{" "}
						<a href="https://www.vier.ai/" target="_blank" rel="noopener noreferrer" className="company-link">
							VIER GmbH
						</a>
					</div>

					<div className="terminal-line delayed-output-2">
						<Prompt />
						<span className="command">cat current_focus.txt</span>
					</div>
					<div className="terminal-output delayed-output-3">
						AI tooling, CI/CD automation
					</div>

					<div className="terminal-line delayed-output-4">
						<Prompt />
						<span className="command">ls hobbies/</span>
					</div>
					<div className="terminal-output delayed-output-5">
						<span className="file-dir">latte-art/</span>&nbsp;&nbsp;
						<span className="file-dir">photography/</span>&nbsp;&nbsp;
						<span className="file-dir">vim-config/</span>&nbsp;&nbsp;
						<span className="file-hidden">.secrets</span>
					</div>

					{/* User command history */}
					{commandHistory.map((item, index) => (
						<div key={index}>
							<div className="terminal-line">
								<Prompt />
								<span className="command">{item.command}</span>
							</div>
							<div className="terminal-output terminal-output-user">{item.output}</div>
						</div>
					))}

					{/* Interactive input */}
					{showInput && (
						<div className="terminal-line">
							<Prompt />
							<div className="input-container">
								<span className="input-text">{userInput}</span>
								<span className="cursor-blink">▊</span>
								<input
									ref={inputRef}
									type="text"
									className="terminal-input-hidden"
									value={userInput}
									onChange={(e) => setUserInput(e.target.value)}
									onKeyDown={handleKeyDown}
									spellCheck="false"
									autoComplete="off"
									autoCapitalize="off"
									autoCorrect="off"
								/>
							</div>
						</div>
					)}
				</div>
				<HeaderSocials />
			</div>
		</header>
	);
};

export default Header;
