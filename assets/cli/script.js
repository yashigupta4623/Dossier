const output = document.getElementById('output');
const input = document.getElementById('command-input');
const body = document.getElementById('terminal-body');

const commands = {
    help: `Available commands:
  <span class="cmd-about">about</span>      - Who am I?
  <span class="cmd-exp">exp</span>        - Professional experience
  <span class="cmd-projects">projects</span>   - Things I've built
  <span class="cmd-skills">skills</span>     - My tech stack
  <span class="cmd-contact">contact</span>    - Get in touch
  <span class="cmd-gui">gui</span>        - Switch to the visual portfolio
  <span>clear</span>      - Clear the terminal`,

    about: `I'm Yashi Gupta, a versatile software developer and technology enthusiast from India.
I specialize in full-stack development, data structures, and algorithms.
Currently working as a <span class="cmd-exp">DevOps Engineer at SportsBaazi</span>.
I thrive on building innovative solutions that combine functionality, efficiency, and user-centric design.`,

    exp: `Professional Experience:
1. <span class="cmd-exp">DevOps Engineer @ SportsBaazi</span> (June 2025 - Present)
   - CI/CD pipelines with Jenkins, Docker, and PM2.
   - Monitoring with Grafana & troubleshooting Linux systems.
2. <span class="cmd-about">SDE Intern @ Microsoft</span> (June 2024 - August 2024)
   - CI/CD, Python, Bash, and YAML expertise.
3. <span class="cmd-projects">GDSC Lead @ NIET</span> (2023 - 2024)
   - Fostered innovation and built a collaborative tech community.
4. <span class="cmd-skills">SDE Intern @ J.P. Morgan Chase & Co.</span> (March 2022 - May 2022)
   - Backend systems with Python and SQL.`,

    projects: `Key Projects:
- <span class="cmd-projects">WanderMind</span>: ReactJS, Firebase, Gemini API
- <span class="cmd-projects">Linkedin PostCraft</span>: Python, Llama, Streamlit
- <span class="cmd-projects">Netflix Data Analysis</span>: Python, Matplotlib
- <span class="cmd-projects">EcoTrack</span>: Carbon Footprint Tracker Web Extension
- <span class="cmd-projects">Dog Breed Classifier</span>: Python & AI`,

    skills: `Tech Stack:
- <span class="cmd-skills">Languages</span>: Python, Java, C++, JavaScript, TypeScript, Bash, SQL
- <span class="cmd-skills">DevOps</span>: Jenkins, Docker, Kubernetes, Azure DevOps, Linux, YAML
- <span class="cmd-skills">Frontend</span>: ReactJS, HTML5, CSS3, Bootstrap
- <span class="cmd-skills">Backend</span>: NodeJS, ExpressJS, Firebase
- <span class="cmd-skills">AI/Data</span>: Gemini API, Streamlit, Matplotlib`,

    contact: `You can reach me at:
- <span class="cmd-contact">Email</span>: yashig406@gmail.com
- <span class="cmd-contact">LinkedIn</span>: yashi-gupta-a65218232
- <span class="cmd-contact">X (Twitter)</span>: @yashig406
- <span class="cmd-contact">Location</span>: Delhi, India`,

    gui: `Redirecting to visual portfolio...`,
    
    clear: ``
};

const asciiArt = `
 __     __         _     _     ____               _        
 \\ \\   / /_ _  ___| |__ (_)   / ___|_   _ _ __  _| |_ __ _ 
  \\ \\ / / _\` |/ __| '_ \\| |  | |  _| | | | '_ \\|_   _/ _\` |
   \\ V / (_| |\\__ \\ | | | |  | |_| | |_| | |_) | | || (_| |
    |_| \\__,_||___/_| |_|_|   \\____|\\__,_| .__/  \\_| \\__,_|
                                         |_|               
`;

function print(text, className = '') {
    const line = document.createElement('div');
    line.className = 'output-line ' + className;
    line.innerHTML = text;
    output.appendChild(line);
    body.scrollTop = body.scrollHeight;
}

function handleCommand(cmd) {
    const cleanCmd = cmd.toLowerCase().trim();
    print(`<span class="prompt">yashigupta@portfolio:~$</span> ${cmd}`);

    if (cleanCmd === '') return;

    if (cleanCmd === 'clear') {
        output.innerHTML = '';
        return;
    }

    if (cleanCmd === 'gui') {
        print(commands.gui);
        setTimeout(() => {
            window.location.href = 'gui.html';
        }, 1000);
        return;
    }

    if (commands[cleanCmd]) {
        print(commands[cleanCmd]);
    } else {
        print(`Command not found: ${cmd}. Type <span class="cmd-help">'help'</span> for a list of commands.`);
    }
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value;
        handleCommand(cmd);
        input.value = '';
    }
});

// Initial Welcome
window.onload = () => {
    print(`<pre class="ascii-art">${asciiArt}</pre>`);
    print("Welcome to Yashi Gupta's Terminal Portfolio.");
    print("Type <span class=\"cmd-help\">'help'</span> to see available commands.");
};
