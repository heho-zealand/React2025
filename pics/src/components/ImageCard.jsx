import {useState, useRef, useEffect} from 'react';

function ImageCard(props) {
    const [spans, setSpans] = useState(0);
    const imageRef = useRef();

    useEffect(() => {
        imageRef.current.addEventListener('load', () => {
            const height = imageRef.current.clientHeight;
            const spans = Math.ceil(height/10);
            setSpans(spans);
        });
    }, []);

    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans});
    }

    render(){
        const {description, urls} = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;