package com.winssage.yemen.webapp;  
import java.util.ArrayList;
import java.util.HashMap; 
import java.util.List;
import java.util.Map;    

import org.apache.log4j.Logger;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;  
import org.springframework.web.servlet.ModelAndView;

import com.winssage.yemen.core.User;
import com.winssage.yemen.dao.UserDao;
 
@Controller
@RequestMapping("/user") 
public class UserController {
	
	private static final Logger logger = Logger.getLogger(UserController.class); 
	
	@Autowired
	UserDao userDao; 	
	
	@RequestMapping("/browse")
	public ModelAndView browse() {
		ModelAndView mv = new ModelAndView("system/userExplorer");
		logger.info("going into userExplorer"); 
		return mv;
	}	
	
	@RequestMapping("/getUser") 
	public @ResponseBody Map<String, Object> getUser() {
		Map<String,Object> map = new HashMap<String,Object>(); 
		User user = userDao.get("admin");  
		logger.info("the user name is"+user.getName());
		map.put("user", user);	
		return map;
	} 

	// 分页查询
	@RequestMapping("/getDataByPage")
	public @ResponseBody Map<String, Object> getDataByPage(String pageIndex,
			String pageSize) {
		logger.info("get data by page,pageIndex="+pageIndex+",pageSize="+pageSize);
		Map<String, Object> map = new HashMap<String, Object>();
		List<User> users = new ArrayList<User>(); 
		//分页查询参数--从第几项开始查询
		int searchPageIndex = Integer.parseInt(pageIndex)*Integer.parseInt(pageSize); 
		//分页数据集合
		users = userDao.getUsersByPage(searchPageIndex,Integer.parseInt(pageSize));
		//总数据量
		int dataNum = userDao.getAllUsersNum();
		//总页数
		int pageNum = (int) Math.ceil(dataNum/Double.parseDouble(pageSize));
		map.put("users", users);
		map.put("dataNum", dataNum);
		map.put("pageNum", pageNum);
		return map;
	}	

}
