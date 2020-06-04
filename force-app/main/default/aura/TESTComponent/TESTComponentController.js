({
    dwonloadFile : function(component, event, helper){
        window.open('/sfc/servlet.shepherd/version/download/0680o00000D5ZnBAAV/0680o00000D5YyGAAV/0680o00000D5Z6OAAV');
    },
    
    aa1 : function(component, event, helper) {
        //alert(event.target.id);
        var  data = event.target.id.split('-');
        console.log(data);
        
        var mapObj =new Map();
        if( component.get('v.mapAttr')!=null ){
            //alert();
            mapObj = new Map(component.get('v.mapAttr'));
            
        }
        console.log(mapObj);
        console.log(mapObj.has(data[0]));
        if(!mapObj.has(data[0]) ){
            mapObj.set(data[0], new Set([data[1]]) );
        }else{
            // alert();
            mapObj.get(data[0]).add(data[1]);
        }
        console.log(mapObj);
        component.set('v.mapAttr',mapObj);
        
    },
    aa : function(component, event, helper) {
        //alert(event.target.id);
        var  data = event.target.id.split('-');
        console.log(data);
        
        var mapObj =new Map();
        if( component.get('v.mapAttr')!=null ){
            // alert();
            mapObj = new Map(component.get('v.mapAttr'));
            
        }
        console.log(mapObj);
        console.log(mapObj.has(data[0]));
        if(!mapObj.has(data[0]) ){
            mapObj.set(data[0],[data[1]]);
        }else{
            // alert();
            mapObj.get(data[0]).push(data[1]);
        }
        console.log(mapObj);
        component.set('v.mapAttr',mapObj);
        
    },
    echo : function(component, event, helper) {
        
        // create a one-time use instance of the serverEcho action
        // in the server-side controller
        var action = component.get("c.serverEcho");
        console.clear();
        console.log(new Object( component.get('v.mapAttr')  ));
        console.log(new Map(component.get('v.mapAttr') ) );
        console.log(new Object(new Map(component.get('v.mapAttr') )) );
        console.log('*********************');
        var mapObj1  = new Map(component.get('v.mapAttr'));
        console.log(mapObj1.keys());
        console.log(mapObj1.values());
        var keyList = [mapObj1.keys()];
        keyList = mapObj1.keys();
        var valueList = [];
        valueList = mapObj1.values();
        console.log('111111111111111111111');
        
        console.log(Array.from(mapObj1.entries()));

        //return;
        action.setParams({ 
            keyList :Array.from(mapObj1.keys()) ,
            valueList : Array.from(mapObj1.values()),
            test :'1'
        });
        
        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Alert the user with the value returned 
                // from the server
                alert("From server: " + response.getReturnValue());
                
                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        
        // optionally set storable, abortable, background flag here
        
        // A client-side action could cause multiple events, 
        // which could trigger other events and 
        // other server-side action calls.
        // $A.enqueueAction adds the server-side action to the queue.
        $A.enqueueAction(action);
    }
    
})