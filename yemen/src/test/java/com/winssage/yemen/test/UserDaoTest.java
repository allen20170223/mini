package com.winssage.yemen.test; 
import static org.junit.Assert.assertNotNull;  
import org.apache.log4j.Logger;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;  
import com.winssage.yemen.common.BaseJunit4Test; 
import com.winssage.yemen.core.User;
import com.winssage.yemen.dao.UserDao; 

public class UserDaoTest extends BaseJunit4Test{
	
	private static final Logger logger = Logger.getLogger(UserDaoTest.class); 
	
	@Autowired
	UserDao userDao;
	
	@Test
	public void testResult(){
		User user = userDao.get("admin");
		assertNotNull(user);
		logger.info("test end");
	}
	

}
