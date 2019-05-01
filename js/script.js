var Movie = React.createClass({
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

var Movie = React.createClass({
    propTypes: {
        movieId: React.PropTypes.object.isRequired,
        movieTitle: React.PropTypes.name.isRequired,
        movieDesc: React.PropTypes.string.isRequired,
        movieImage: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            React.createElement(Movie 'li', {key: movieId},
            React.createElement(Movie 'h2', {}, this.props.movietTitle),
            React.createElement(Movie 'p', {}, this.props.movieDesc),
            React.createElement(Movie 'img', {src: this.props.movieImage, alt: this.props.movie.title}),
        )
    )},
});

var element =
React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, movie),
);


ReactDOM.render(element, document.getElementById('app'));