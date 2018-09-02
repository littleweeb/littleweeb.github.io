
$( document ).ready(function() {
    var platforms = ["mac", "linux", "win"];

    console.log("Getting latest releases.");
    $.get( "https://api.github.com/repos/littleweeb/Desktop/releases", function( data ) {
        console.log(data);
        var latestTag = data[0].tag_name;
        
        var latestVersion = latestTag.split('_')[0];
        
        var latestRelease;
        
        for(var i = 0; i < data.length; i++){
                var release = data[i];
            console.log(release);
            if(release.tag_name.indexOf(latestVersion) > -1 && release.tag_name.indexOf("develop") == -1){
                    var platform = release.tag_name.split('_')[1];
                var indexOfPlatform = platforms.indexOf(platform);
                
                switch(indexOfPlatform){
                    case 0:             
                        latestRelease = release.assets[release.assets.length - 1];
                        $("#mac_url").attr("href", latestRelease.browser_download_url);
                        $("#mac_release").html(latestVersion);
                        $("#mac_count").html(latestRelease.download_count);
                        console.log({url : latestRelease.browser_download_url, name : latestRelease.name, count: latestRelease.download_count})
                    break;
                    case 1:
                        latestRelease = release.assets[release.assets.length - 1];
                        $("#linux_url").attr("href", latestRelease.browser_download_url);
                        $("#linux_release").html(latestVersion);
                        $("#linux_count").html(latestRelease.download_count);
                    break;
                    case 2:            
                        latestRelease = release.assets[release.assets.length - 1];
                        $("#windows_url").attr("href", latestRelease.browser_download_url);
                        $("#windows_release").html(latestVersion);
                        $("#windows_count").html(latestRelease.download_count);
                    break;
                }          
            }    
            
        }    
    
    });

    $.get( "https://api.github.com/repos/littleweeb/Android/releases", function( data ) {
        console.log(data);
        var latestTag = data[0].tag_name;
        
        var latestVersion = latestTag.split('_')[0];
        
        var release = data[0];

        var latestRelease = release.assets[release.assets.length - 1];
        $("#android_url").attr("href", latestRelease.browser_download_url);
        $("#android_release").html(latestVersion);
        $("#android_count").html(latestRelease.download_count);
        
    
    });
});