﻿[{
    Name: "Unknown Module",
    Author: "Generoso Martello",
    Version: "2013-03-31",

    GroupName: '',
    IconImage: 'pages/control/widgets/homegenie/generic/images/unknown.png',
    StatusText: '',
    Description: '',

    RenderView: function (cuid, module) {
        var container = $(cuid);
        var widget = container.find('[data-ui-field=widget]');
        //
        // render widget
        //
        widget.find('[data-ui-field=name]').html(module.Name + " (" + module.DeviceType + ")");
    }

}]