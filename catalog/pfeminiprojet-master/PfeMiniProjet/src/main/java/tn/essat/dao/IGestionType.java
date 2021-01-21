package tn.essat.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.essat.model.TypePfe;



@Repository
public interface IGestionType extends JpaRepository<TypePfe, Integer> {

}
