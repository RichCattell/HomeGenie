﻿[{
    Name: "Generic Dummy Type",
    Author: "Generoso Martello",
    Version: "2013-03-31",

    GroupName: '',
    IconImage: 'pages/control/widgets/homegenie/generic/images/unknown.png',
    StatusText: '',
    Description: '',
    Initialized: false,

    RenderView: function (cuid, module) {
        var container = $(cuid);
        var widget = container.find('[data-ui-field=widget]');
        this.Description = (module.Domain.substring(module.Domain.lastIndexOf('.') + 1)) + ' ' + module.Address;
        //
        if (!this.Initialized) {
            this.Initialized = true;
            // settings button
            widget.find('[data-ui-field=settings]').on('click', function () {
                HG.WebApp.Control.EditModule(module);
            });
        }
        //
        // render widget
        //
        widget.find('[data-ui-field=name]').html(module.Name + " (" + module.DeviceType + ")");
        widget.find('[data-ui-field=description]').html(this.Description);
    }

}]