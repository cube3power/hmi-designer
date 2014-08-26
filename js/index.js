usemockups.toolbox = new usemockups.collections.Toolbox(usemockups.fixtures.toolbox);

usemockups.custom_mockup_views = {
    "table": usemockups.views.TableMockup
};

$(function () {

    var documents = new usemockups.collections.Documents();
    var router = new usemockups.routers.Document({
        documents: documents
    });

    Backbone.history.start({
        pushState: false // !!(window.history && window.history.pushState)
    });

    new usemockups.views.Navigation({
        router: router,
        model: documents
    });

});
