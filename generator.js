var fs = require('fs-extra');

module.exports = {

    generate: function (template, projectName){
        
        fs.mkdirs('./' + projectName + '', function (error) {
            if(error)
                console.log(error);
            else{
                
                var templateToCopy = __dirname + "/templates/" + template;
                var projDir = './' + projectName;

                fs.copy(templateToCopy, projDir, function (err) {
                    if (err) {
                        console.error(err)
                      } else {
                        console.log('success!!!!!!!!!!!!');
                      }
                });

            }
        });
    }
}