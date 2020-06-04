public class Controller1 {
    
    // Public static void serverEcho(Object mapObj){
    @AuraEnabled Public static void serverEcho(List<String> keyList, List<List<String>> valueList , String test){
        System.debug('test-->'+test);
        System.debug('keyList-->'+keyList);
        System.debug('valueList-->'+valueList);
        System.debug(keyList.indexOf('1'));
        //Map<Id, Set<String>> o;
        
    }
    
}