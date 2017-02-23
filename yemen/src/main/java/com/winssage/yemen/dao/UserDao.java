package com.winssage.yemen.dao;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory; 
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;  

import com.winssage.yemen.core.User;

@Repository
@Transactional
public class UserDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	private Session getCurrentSession(){
		return sessionFactory.getCurrentSession();
	}
	
	public User get(String loginName) {
		Criteria criteria = getCurrentSession().createCriteria(User.class);
		criteria.add(Restrictions.eq("loginName", loginName));
		return (User) criteria.uniqueResult();
	}
	
	public void add(User user) { 
		getCurrentSession().save(user); 
	}

	public User create() {
		User user = new User();
		return user;
	}

	public List<User> getUsersByPage(int pageIndex, int pageSize) { 
	    Criteria c = getCurrentSession().createCriteria(User.class);
	    c.setFirstResult(pageIndex);
	    c.setMaxResults(pageSize);
	    return new ArrayList<User>(c.list());
	} 

	public List<User> getAllUsers() {  
		Criteria criteria = getCurrentSession()
				.createCriteria(User.class);
		return new ArrayList<User>(criteria.list());
	}

	public int getAllUsersNum() {
		Criteria c = getCurrentSession().createCriteria(User.class); 
		c.setProjection(Projections.rowCount());
		int rowCount =Integer.parseInt(c.uniqueResult().toString());
		return rowCount;
	} 

}
