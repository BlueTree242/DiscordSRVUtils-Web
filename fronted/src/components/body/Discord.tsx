import tw from "twin.macro";

function Discord() {
    return <div css={tw`text-center mb-10 mt-5`}>
        <h2>Discord Server</h2>
        <iframe src="https://discord.com/widget?id=741675514707705887&theme=dark" width="350" height="500" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
}

export default Discord;