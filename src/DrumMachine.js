import React from "react";

const padData = [
    {
        clip: "Bush Point Nov 22, 2020 12:19:41 PST",
        triggerKey: "Q",
        source: "https://dl.dropboxusercontent.com/scl/fi/65x9emx6tn728y03xvlvr/rpi_bush_point_2020_11_22_12_19_41_PST.wav?rlkey=7osq32600ucifojnpc96f0srl&dl=0",
        playing: false
    },
    {
        clip: "Orcasound Lab Sep 30, 2020 3:58:56 PST",
        triggerKey: "W",
        source: "https://dl.dropboxusercontent.com/scl/fi/nndi94g3e1wdqjwjg8fa5/rpi_orcasound_lab_2020_09_30_03_58_56_PDT.wav?rlkey=u8aapnc1tamou0lt4gawhek3p&dl=0",
        playing: false
    },
    {
        clip: "Orcasound Lab Sep 30, 2020 4:03:56 PST",
        triggerKey: "E",
        source: "https://dl.dropboxusercontent.com/scl/fi/3kywk1v25jfiiv151euu3/rpi_orcasound_lab_2020_09_30_04_03_56_PDT.wav?rlkey=i82cbl1dedl2v39jnmr7h0fs8&dl=0",
        playing: false
    },
    {
        clip: "Orcasound Lab Sep 30, 2020 4:06:56 PST",
        triggerKey: "A",
        source: "https://dl.dropboxusercontent.com/scl/fi/3wqm5q2ser6gaqw21pgx8/rpi_orcasound_lab_2020_09_30_04_06_56_PDT.wav?rlkey=55my3x01687teexjk3lx97u02&dl=0",
        playing: false
    },
    {
        clip: "Orcasound Lab Sep 30, 2020 4:07:56 PST",
        triggerKey: "S",
        source: "https://dl.dropboxusercontent.com/scl/fi/pw2yhcybuk8x8af0aa0us/rpi_orcasound_lab_2020_09_30_04_07_56_PDT.wav?rlkey=b5nvmqfi4dxroqjyjrq3zf2o2&dl=0",
        playing: false
    },
    {
        clip: "Orcasound Lab Sep 30, 2020 4:10:56 PST",
        triggerKey: "D",
        source: "https://dl.dropboxusercontent.com/scl/fi/yucyuv5xfqx3d0ta5wkpy/rpi_orcasound_lab_2020_09_30_04_10_56_PDT.wav?rlkey=i7jsbw0j34sa3u8vz1u8np2wx&dl=0",
        playing: false
    },
    {
        clip: "Orcasound Lab Sep 30, 2020 4:15:56 PST",
        triggerKey: "Z",
        source: "https://dl.dropboxusercontent.com/scl/fi/tz1g793g6c1pkm96ymqjl/rpi_orcasound_lab_2020_09_30_04_15_56_PDT.wav?rlkey=o3gcvtfor33vnpenji9b6m2l4&dl=0",
        playing: false
    },
    {
        clip: "Orcasound Lab Sep 30, 2020 4:34:56 PST",
        triggerKey: "X",
        source: "https://dl.dropboxusercontent.com/scl/fi/6vjxq7jmwr04pvjth2j4f/rpi_orcasound_lab_2020_09_30_04_34_56_PDT.wav?rlkey=1v6f89d5qoazenmdu6wbqq285&dl=0",
        playing: false
    },
    {
        clip: "Orcasound Lab Mar 10, 2021 10:22:39 PST",
        triggerKey: "C",
        source: "https://dl.dropboxusercontent.com/scl/fi/tqdhdwzxor1ot6sdipgid/rpi_orcasound_lab_2021_03_10_10_22_39_PST.wav?rlkey=zfg3mm96qq53om01w3g8hj438&dl=0",
        playing: false
    },
]

const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
}

const gridStyle = {
    display: "grid",
    width: 600,
    height: 600,
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 16,
}

let padStyle = {
    backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "5px 5px 5px rgba(0,0,0,.5)",
    fontSize: 60,
    fontWeight: "bold",
    color: "darkgray",
}




const DrumPad = props => {
    const style = {...padStyle, backgroundColor: props.playing ? "gray" : "lightgray"};
    return (
        <div style={style} onClick={props.handleClick} className="drum-pad" id={props.clip} key={props.clip}>
            {props.triggerKey}
            <audio className="clip" id={props.triggerKey} src={props.source}></audio>
        </div>  
    );
}

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pads: [...padData]
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);
    };

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress(e) {
        const player = document.getElementById(e.key.toUpperCase());
        const relevantPad = this.state.pads.filter(pad => pad.triggerKey === e.key.toUpperCase())[0];
        if(relevantPad) {
            relevantPad.playing ? player.pause() : player.play();
            const nextPads = this.state.pads.map(pad => {
                if(pad.triggerKey === e.key.toUpperCase()) {
                    return {
                        ...pad,
                        playing: !pad.playing    
                    }
                } else {
                    return pad;
                };
            });
            this.setState({
                pads: nextPads
            })    
        } else {
            return;
        }
    }

    handleClick(e) {
        const player = e.target.querySelector('audio');
        const currentState = this.state.pads.filter(pad => pad.clip === e.target.id)[0].playing;
        currentState ? player.pause() : player.play();
        const nextPads = this.state.pads.map(pad => {
            if(pad.clip === e.target.id) {
                return {
                    ...pad,
                    playing: !pad.playing    
                }
            } else {
                return pad;
            };
        });
        this.setState({
            pads: nextPads,
        });
    }

    updateDisplay() {
        const nextDisplay = this.state.pads.filter(pad => pad.playing);
        this.setState({
            currentlyPlaying: nextDisplay,
        })

    }

    render() {
        const pads = this.state.pads.map(el => (
            <DrumPad key={el.clip} clip={el.clip} triggerKey={el.triggerKey} source={el.source} playing={el.playing} handleClick={this.handleClick} />
            ));
        const currentlyPlaying = this.state.pads.filter(el => el.playing);
        const display = currentlyPlaying.map(el => <li>{el.triggerKey} - {el.clip}</li>)
        return (
            <div id="drum-machine" style={containerStyle}>
                <ul id="display" style={{padding:0}}>
                    {display.length ? display : "Click a pad or key"}
                </ul>
                <div style={gridStyle}>
                    {pads}
                </div>
            </div>
        )
    }
}

export default DrumMachine;