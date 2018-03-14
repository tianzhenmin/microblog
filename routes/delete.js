exports.delete = function(db, req, res){
    exports.parseReceicedData(req, function(work){
        db.query(
            "delete from work where id=?",
            [work.id],
            function(err){
                if(err) throw err;
                exports.show(db, res);
            }
        );
    });
};