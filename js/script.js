var movie = React.createClass({
    render: function() {
        [
            {
                id: 1,
                title: 'Harry Potter',
                desc: 'film o czarodzieju',
                src: './images/potter.jpg'
            },
            {
                id: 2,
                title: 'Król Lew',
                desc: 'Film o królu sawanny',
                src: './images/lion.jpg'
            },
            {
                id: 3,
                title: 'Władca Pierścieni',
                desc: 'film o władcy pierścieni',
                src: './images/lord.jpg'
            },
            {
                id: 4,
                title: 'Gra o tron',
                desc: 'Film o królewskich rodach',
                src: './images/game.jpg'
            }
        ];
    }
});

var movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {key: movie.id},
            React.createElement('h2', {}, this.props.movie.title),
            React.createElement('p', {}, this.props.movie.desc),
            React.createElement('img', {src: this.props.movie.src, this.props.alt: movie.title}),
        )
    )},
});

var GalleryItem = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('div', {},
            React.createElement('h2', {}, this.props.image.name),
            React.createElement('img', {src: this.props.image.src})
        )
    )},
});

var element =
React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
);

ReactDOM.render(element, document.getElementById('app'));