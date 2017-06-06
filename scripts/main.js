// console.log("main.js is ok.");

require(["scripts/dataImport"],function(dataImport){
// --------------jquery ajax json---------------------
    var someData = dataImport("data");
    console.log(someData);

// ---------------react component----------------------
    var Hello = React.createClass({

        getInitialState: function(){
            return {};
        },

        render: function(){
            return <span>hello world</span>;
        }
    });

    ReactDOM.render(
        <Hello />,
        document.getElementById("outter")
    );
});