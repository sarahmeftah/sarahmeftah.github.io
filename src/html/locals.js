/**
 * Local Pug Data
 */

'use strict';

var locals = {};

locals.baseTitle = 'Sarah Meftah';
locals.getTitle = function(subtitle) {
    if (subtitle) {
        return locals.baseTitle + ' - ' + subtitle;
    }
    return locals.baseTitle;
};


locals.projects = {

};


module.exports = locals;
